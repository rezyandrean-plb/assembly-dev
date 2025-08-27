# Strapi Login & Email Verification Backend Implementation Prompt

## Project Overview
I need to implement a complete login and email verification system using Strapi CMS as the backend. The system should replace traditional password-based authentication with email verification codes.

## Requirements

### 1. User Management
- Create a custom User content type that extends Strapi's default User
- Add fields for email verification status, verification codes, and code expiration
- Implement user registration and login flows
- Handle user roles and permissions
- **Store all user data in PostgreSQL database**

### 2. Email Verification System
- Generate 6-digit verification codes with 5-minute expiration
- Send verification codes via email using Strapi's email plugin
- Validate verification codes and authenticate users
- Handle code resend functionality with rate limiting
- **Persist verification codes and expiration times in PostgreSQL**

### 3. Authentication Flow
- Replace password-based login with email-only login
- Implement secure session management
- Handle JWT token generation and validation
- Provide logout functionality
- **Store authentication logs and session data in PostgreSQL**

### 4. Database Requirements
- **Use PostgreSQL as the primary database**
- Implement proper database schema design
- Create database migrations for all new fields
- Set up database indexes for performance optimization
- Implement data backup and recovery procedures
- Handle database connection pooling
- Set up database monitoring and logging

## Technical Specifications

### Content Types

#### Extended User Model
```javascript
// Extend Strapi's default User with custom fields
{
  email: { type: 'email', required: true, unique: true },
  username: { type: 'string', required: true, unique: true },
  emailVerified: { type: 'boolean', default: false },
  verificationCode: { type: 'string' },
  verificationCodeExpires: { type: 'datetime' },
  lastLoginAttempt: { type: 'datetime' },
  loginAttempts: { type: 'integer', default: 0 },
  accountLocked: { type: 'boolean', default: false },
  accountLockedUntil: { type: 'datetime' }
}
```

### API Endpoints

#### 1. Send Verification Code
```
POST /api/auth/send-verification
Content-Type: application/json

Request Body:
{
  "email": "user@example.com"
}

Response:
{
  "success": true,
  "message": "Verification code sent successfully"
}
```

#### 2. Verify Code and Login
```
POST /api/auth/verify-code
Content-Type: application/json

Request Body:
{
  "email": "user@example.com",
  "code": "123456"
}

Response:
{
  "success": true,
  "message": "Login successful",
  "user": {
    "id": 1,
    "email": "user@example.com",
    "username": "username",
    "emailVerified": true,
    "role": "authenticated"
  },
  "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### 3. Resend Verification Code
```
POST /api/auth/resend-verification
Content-Type: application/json

Request Body:
{
  "email": "user@example.com"
}

Response:
{
  "success": true,
  "message": "Verification code resent successfully"
}
```

#### 4. Logout
```
POST /api/auth/logout
Authorization: Bearer <jwt_token>

Response:
{
  "success": true,
  "message": "Logged out successfully"
}
```

### Email Templates

#### Verification Code Email
```html
Subject: Your Assembly Login Verification Code

Hello,

You requested a verification code to access your Assembly account.

Your verification code is: <strong>{{ code }}</strong>

This code will expire in 5 minutes.

If you didn't request this code, please ignore this email.

Best regards,
The Assembly Team
```

## Implementation Details

### 1. Strapi Configuration

#### Install Required Plugins
```bash
npm install @strapi/plugin-email
npm install @strapi/plugin-users-permissions
```

#### Configure Email Provider
```javascript
// config/plugins.js
module.exports = ({ env }) => ({
  email: {
    config: {
      provider: '@strapi/provider-email-sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'noreply@assembly.com',
        defaultReplyTo: 'support@assembly.com',
      },
    },
  },
});
```

### 2. Custom Controllers

#### Auth Controller
```javascript
// src/api/auth/controllers/auth.js
const { sanitizeEntity } = require('@strapi/utils');

module.exports = {
  async sendVerification(ctx) {
    const { email } = ctx.request.body;

    // Validate email
    if (!email) {
      return ctx.badRequest('Email is required');
    }

    // Check if user exists
    const user = await strapi.query('plugin::users-permissions.user').findOne({
      where: { email: email.toLowerCase() }
    });

    if (!user) {
      return ctx.notFound('User not found');
    }

    // Generate verification code
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes

    // Update user with verification code
    await strapi.query('plugin::users-permissions.user').update({
      where: { id: user.id },
      data: {
        verificationCode: code,
        verificationCodeExpires: expiresAt
      }
    });

    // Send email
    await strapi.plugins['email'].services.email.send({
      to: email,
      subject: 'Your Assembly Login Verification Code',
      html: `
        <h2>Your Verification Code</h2>
        <p>Your verification code is: <strong>${code}</strong></p>
        <p>This code will expire in 5 minutes.</p>
      `
    });

    return ctx.send({
      success: true,
      message: 'Verification code sent successfully'
    });
  },

  async verifyCode(ctx) {
    const { email, code } = ctx.request.body;

    // Validate input
    if (!email || !code) {
      return ctx.badRequest('Email and verification code are required');
    }

    // Find user
    const user = await strapi.query('plugin::users-permissions.user').findOne({
      where: { email: email.toLowerCase() }
    });

    if (!user) {
      return ctx.notFound('User not found');
    }

    // Check if code is valid and not expired
    if (!user.verificationCode || 
        user.verificationCode !== code ||
        new Date() > new Date(user.verificationCodeExpires)) {
      return ctx.badRequest('Invalid or expired verification code');
    }

    // Clear verification code
    await strapi.query('plugin::users-permissions.user').update({
      where: { id: user.id },
      data: {
        verificationCode: null,
        verificationCodeExpires: null,
        emailVerified: true,
        lastLoginAttempt: new Date(),
        loginAttempts: 0
      }
    });

    // Generate JWT token
    const jwt = strapi.plugins['users-permissions'].services.jwt.issue({
      id: user.id,
      email: user.email
    });

    // Return user data and token
    const sanitizedUser = sanitizeEntity(user, {
      model: strapi.query('plugin::users-permissions.user').model,
    });

    return ctx.send({
      success: true,
      message: 'Login successful',
      user: sanitizedUser,
      jwt
    });
  },

  async resendVerification(ctx) {
    const { email } = ctx.request.body;

    // Rate limiting check
    const user = await strapi.query('plugin::users-permissions.user').findOne({
      where: { email: email.toLowerCase() }
    });

    if (!user) {
      return ctx.notFound('User not found');
    }

    // Check if user is locked
    if (user.accountLocked && new Date() < new Date(user.accountLockedUntil)) {
      return ctx.tooManyRequests('Account temporarily locked. Please try again later.');
    }

    // Generate new code
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

    // Update user
    await strapi.query('plugin::users-permissions.user').update({
      where: { id: user.id },
      data: {
        verificationCode: code,
        verificationCodeExpires: expiresAt,
        loginAttempts: user.loginAttempts + 1
      }
    });

    // Send email
    await strapi.plugins['email'].services.email.send({
      to: email,
      subject: 'Your Assembly Login Verification Code',
      html: `
        <h2>Your Verification Code</h2>
        <p>Your verification code is: <strong>${code}</strong></p>
        <p>This code will expire in 5 minutes.</p>
      `
    });

    return ctx.send({
      success: true,
      message: 'Verification code resent successfully'
    });
  }
};
```

### 3. Custom Routes

```javascript
// src/api/auth/routes/auth.js
module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/auth/send-verification',
      handler: 'auth.sendVerification',
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/auth/verify-code',
      handler: 'auth.verifyCode',
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/auth/resend-verification',
      handler: 'auth.resendVerification',
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/auth/logout',
      handler: 'auth.logout',
      config: {
        auth: {
          scope: ['authenticated']
        },
        policies: [],
        middlewares: [],
      },
    },
  ],
};
```

### 4. Middleware for Rate Limiting

```javascript
// src/middlewares/rate-limit.js
module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    const { email } = ctx.request.body;
    
    if (email) {
      const user = await strapi.query('plugin::users-permissions.user').findOne({
        where: { email: email.toLowerCase() }
      });

      if (user && user.loginAttempts >= 5) {
        // Lock account for 15 minutes
        const lockUntil = new Date(Date.now() + 15 * 60 * 1000);
        await strapi.query('plugin::users-permissions.user').update({
          where: { id: user.id },
          data: {
            accountLocked: true,
            accountLockedUntil: lockUntil
          }
        });

        return ctx.tooManyRequests('Too many attempts. Account locked for 15 minutes.');
      }
    }

    await next();
  };
};
```

### 5. Environment Variables

```bash
# Strapi Configuration
HOST=0.0.0.0
PORT=1337
APP_KEYS=your-app-keys
API_TOKEN_SALT=your-api-token-salt
ADMIN_JWT_SECRET=your-admin-jwt-secret
JWT_SECRET=your-jwt-secret

# Database Configuration
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=assembly_auth
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=your_secure_password
DATABASE_SSL=false
DATABASE_SCHEMA=public
DATABASE_POOL_MIN=2
DATABASE_POOL_MAX=10
DATABASE_ACQUIRE_CONNECTION_TIMEOUT=60000
DATABASE_DEBUG=false

# Email Configuration
SENDGRID_API_KEY=your-sendgrid-api-key
EMAIL_FROM=noreply@assembly.com
EMAIL_REPLY_TO=support@assembly.com

# Security Configuration
SESSION_SECRET=your-session-secret
COOKIE_SECRET=your-cookie-secret
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=5
```

### 6. Database Configuration

#### PostgreSQL Setup
```javascript
// config/database.js
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'assembly_auth'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'password'),
      ssl: env.bool('DATABASE_SSL', false) ? {
        rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
      } : false,
      schema: env('DATABASE_SCHEMA', 'public'),
    },
    pool: {
      min: env.int('DATABASE_POOL_MIN', 2),
      max: env.int('DATABASE_POOL_MAX', 10),
    },
    acquireConnectionTimeout: env.int('DATABASE_ACQUIRE_CONNECTION_TIMEOUT', 60000),
    debug: env.bool('DATABASE_DEBUG', false),
  },
});
```

#### Environment Variables for Database
```bash
# Database Configuration
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=assembly_auth
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=your_secure_password
DATABASE_SSL=false
DATABASE_SCHEMA=public
DATABASE_POOL_MIN=2
DATABASE_POOL_MAX=10
DATABASE_ACQUIRE_CONNECTION_TIMEOUT=60000
DATABASE_DEBUG=false
```

### 7. Database Migrations

#### Initial Migration for User Extensions
```javascript
// database/migrations/001-add-verification-fields.js
module.exports = {
  async up(knex) {
    await knex.schema.alterTable('users-permissions_user', (table) => {
      // Email verification fields
      table.boolean('emailVerified').defaultTo(false).notNullable();
      table.string('verificationCode', 6);
      table.timestamp('verificationCodeExpires');
      
      // Security and rate limiting fields
      table.timestamp('lastLoginAttempt');
      table.integer('loginAttempts').defaultTo(0).notNullable();
      table.boolean('accountLocked').defaultTo(false).notNullable();
      table.timestamp('accountLockedUntil');
      
      // Additional user fields
      table.string('firstName');
      table.string('lastName');
      table.string('phoneNumber');
      table.timestamp('lastActive');
      table.boolean('isActive').defaultTo(true).notNullable();
      
      // Audit fields
      table.timestamp('createdAt').defaultTo(knex.fn.now());
      table.timestamp('updatedAt').defaultTo(knex.fn.now());
    });

    // Create indexes for performance
    await knex.schema.raw(`
      CREATE INDEX idx_users_email ON users-permissions_user(email);
      CREATE INDEX idx_users_verification_code ON users-permissions_user(verificationCode);
      CREATE INDEX idx_users_verification_expires ON users-permissions_user(verificationCodeExpires);
      CREATE INDEX idx_users_account_locked ON users-permissions_user(accountLocked, accountLockedUntil);
      CREATE INDEX idx_users_login_attempts ON users-permissions_user(loginAttempts);
    `);
  },

  async down(knex) {
    // Drop indexes
    await knex.schema.raw(`
      DROP INDEX IF EXISTS idx_users_email;
      DROP INDEX IF EXISTS idx_users_verification_code;
      DROP INDEX IF EXISTS idx_users_verification_expires;
      DROP INDEX IF EXISTS idx_users_account_locked;
      DROP INDEX IF EXISTS idx_users_login_attempts;
    `);

    // Drop columns
    await knex.schema.alterTable('users-permissions_user', (table) => {
      table.dropColumn('emailVerified');
      table.dropColumn('verificationCode');
      table.dropColumn('verificationCodeExpires');
      table.dropColumn('lastLoginAttempt');
      table.dropColumn('loginAttempts');
      table.dropColumn('accountLocked');
      table.dropColumn('accountLockedUntil');
      table.dropColumn('firstName');
      table.dropColumn('lastName');
      table.dropColumn('phoneNumber');
      table.dropColumn('lastActive');
      table.dropColumn('isActive');
      table.dropColumn('createdAt');
      table.dropColumn('updatedAt');
    });
  },
};
```

#### Authentication Logs Table
```javascript
// database/migrations/002-create-auth-logs.js
module.exports = {
  async up(knex) {
    await knex.schema.createTable('auth_logs', (table) => {
      table.increments('id').primary();
      table.integer('userId').unsigned().references('id').inTable('users-permissions_user').onDelete('CASCADE');
      table.string('action', 50).notNullable(); // 'login_attempt', 'verification_sent', 'login_success', 'logout'
      table.string('ipAddress', 45); // IPv6 compatible
      table.string('userAgent');
      table.string('email');
      table.boolean('success').defaultTo(false);
      table.text('errorMessage');
      table.jsonb('metadata'); // Additional data like device info, location, etc.
      table.timestamp('createdAt').defaultTo(knex.fn.now());
      
      // Indexes
      table.index(['userId']);
      table.index(['action']);
      table.index(['email']);
      table.index(['success']);
      table.index(['createdAt']);
    });
  },

  async down(knex) {
    await knex.schema.dropTableIfExists('auth_logs');
  },
};
```

#### Session Management Table
```javascript
// database/migrations/003-create-sessions.js
module.exports = {
  async up(knex) {
    await knex.schema.createTable('user_sessions', (table) => {
      table.increments('id').primary();
      table.integer('userId').unsigned().references('id').inTable('users-permissions_user').onDelete('CASCADE');
      table.string('sessionToken', 255).unique().notNullable();
      table.string('refreshToken', 255).unique();
      table.timestamp('expiresAt').notNullable();
      table.string('ipAddress', 45);
      table.string('userAgent');
      table.boolean('isActive').defaultTo(true);
      table.timestamp('lastActivity');
      table.timestamp('createdAt').defaultTo(knex.fn.now());
      table.timestamp('updatedAt').defaultTo(knex.fn.now());
      
      // Indexes
      table.index(['userId']);
      table.index(['sessionToken']);
      table.index(['refreshToken']);
      table.index(['expiresAt']);
      table.index(['isActive']);
    });
  },

  async down(knex) {
    await knex.schema.dropTableIfExists('user_sessions');
  },
};
```

## Security Considerations

1. **Rate Limiting**: Implement rate limiting for verification code requests
2. **Code Expiration**: Verification codes expire after 5 minutes
3. **Account Locking**: Lock accounts after multiple failed attempts
4. **Input Validation**: Validate all inputs and sanitize data
5. **HTTPS**: Ensure all communications use HTTPS
6. **JWT Security**: Use secure JWT tokens with appropriate expiration
7. **Database Security**: Use parameterized queries to prevent SQL injection
8. **Connection Pooling**: Implement proper database connection management
9. **Data Encryption**: Encrypt sensitive data at rest and in transit
10. **Audit Logging**: Log all authentication attempts and security events

## Testing

### Test Cases
1. Send verification code to valid email
2. Send verification code to non-existent email
3. Verify code with correct code
4. Verify code with incorrect code
5. Verify code with expired code
6. Resend verification code
7. Rate limiting functionality
8. Account locking after multiple attempts

## Database Setup and Management

### PostgreSQL Installation and Configuration
```bash
# Install PostgreSQL (Ubuntu/Debian)
sudo apt update
sudo apt install postgresql postgresql-contrib

# Install PostgreSQL (macOS)
brew install postgresql

# Install PostgreSQL (Windows)
# Download from https://www.postgresql.org/download/windows/

# Create database and user
sudo -u postgres psql
CREATE DATABASE assembly_auth;
CREATE USER assembly_user WITH ENCRYPTED PASSWORD 'your_secure_password';
GRANT ALL PRIVILEGES ON DATABASE assembly_auth TO assembly_user;
\q
```

### Database Backup and Recovery
```bash
# Create backup script
#!/bin/bash
BACKUP_DIR="/var/backups/postgresql"
DATE=$(date +%Y%m%d_%H%M%S)
DB_NAME="assembly_auth"

# Create backup
pg_dump -h localhost -U postgres -d $DB_NAME > $BACKUP_DIR/backup_$DATE.sql

# Restore from backup
psql -h localhost -U postgres -d $DB_NAME < backup_20231201_120000.sql
```

### Database Monitoring
```sql
-- Check active connections
SELECT count(*) FROM pg_stat_activity WHERE state = 'active';

-- Check slow queries
SELECT query, mean_time, calls 
FROM pg_stat_statements 
ORDER BY mean_time DESC 
LIMIT 10;

-- Check table sizes
SELECT 
    schemaname,
    tablename,
    pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename)) as size
FROM pg_tables 
WHERE schemaname = 'public'
ORDER BY pg_total_relation_size(schemaname||'.'||tablename) DESC;
```

## Deployment

1. **Set up Strapi production environment**
2. **Configure PostgreSQL database**
   - Set up production PostgreSQL instance
   - Configure connection pooling
   - Set up automated backups
   - Configure monitoring and alerting
3. **Configure email provider** (SendGrid, AWS SES, etc.)
4. **Set up database** (PostgreSQL recommended for production)
5. **Configure environment variables**
6. **Set up SSL certificates**
7. **Configure CORS settings**
8. **Set up monitoring and logging**
9. **Implement database migration strategy**
10. **Set up automated database backups**

## Frontend Integration

The frontend should:
1. Call `/api/auth/send-verification` with email
2. Redirect to verification page with email parameter
3. Call `/api/auth/verify-code` with email and code
4. Store JWT token in secure storage
5. Include JWT token in subsequent API requests
6. Handle error responses appropriately
7. Implement proper error handling for database connection issues
8. Add retry logic for failed API calls
9. Implement offline detection and queue management

## Database Performance Optimization

### Indexing Strategy
```sql
-- Create composite indexes for common queries
CREATE INDEX idx_users_email_verified ON users-permissions_user(email, emailVerified);
CREATE INDEX idx_users_verification_active ON users-permissions_user(verificationCode, verificationCodeExpires) 
WHERE verificationCode IS NOT NULL;

-- Create partial indexes for active sessions
CREATE INDEX idx_sessions_active ON user_sessions(userId, isActive) 
WHERE isActive = true;

-- Create indexes for audit logs
CREATE INDEX idx_auth_logs_user_action ON auth_logs(userId, action, createdAt);
```

### Query Optimization
```sql
-- Optimize user lookup with verification code
SELECT id, email, verificationCode, verificationCodeExpires 
FROM users-permissions_user 
WHERE email = $1 AND verificationCode IS NOT NULL 
AND verificationCodeExpires > NOW();

-- Optimize session cleanup
DELETE FROM user_sessions 
WHERE expiresAt < NOW() OR isActive = false;

-- Optimize auth logs cleanup (keep last 30 days)
DELETE FROM auth_logs 
WHERE createdAt < NOW() - INTERVAL '30 days';
```

### Connection Pooling Configuration
```javascript
// config/database.js - Advanced pooling
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'assembly_auth'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'password'),
      ssl: env.bool('DATABASE_SSL', false) ? {
        rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
      } : false,
      schema: env('DATABASE_SCHEMA', 'public'),
    },
    pool: {
      min: env.int('DATABASE_POOL_MIN', 2),
      max: env.int('DATABASE_POOL_MAX', 10),
      acquireTimeoutMillis: env.int('DATABASE_ACQUIRE_TIMEOUT', 60000),
      createTimeoutMillis: env.int('DATABASE_CREATE_TIMEOUT', 30000),
      destroyTimeoutMillis: env.int('DATABASE_DESTROY_TIMEOUT', 5000),
      idleTimeoutMillis: env.int('DATABASE_IDLE_TIMEOUT', 30000),
      reapIntervalMillis: env.int('DATABASE_REAP_INTERVAL', 1000),
      createRetryIntervalMillis: env.int('DATABASE_CREATE_RETRY_INTERVAL', 200),
    },
    acquireConnectionTimeout: env.int('DATABASE_ACQUIRE_CONNECTION_TIMEOUT', 60000),
    debug: env.bool('DATABASE_DEBUG', false),
  },
});
```

This implementation provides a complete, secure, and scalable email verification system using Strapi as the backend with PostgreSQL database integration, including comprehensive database management, performance optimization, and production-ready deployment strategies.