import { NextRequest, NextResponse } from 'next/server';

// Temporary user storage - in production this would be in a database
const TEMP_USERS = [
  {
    email: "pyee.1104@gmail.com",
    name: "Pei Yee",
    role: "user",
  },
  {
    email: "jenna.tan@propertylimbrothers.com",
    name: "Jenna Tan",
    role: "admin",
  },
  {
    email: "blurryorr@gmail.com",
    name: "Blurry Orr",
    role: "user",
  },
  {
    email: "admin@assembly.com",
    name: "Super Admin",
    role: "super_admin",
  },
];

// Temporary verification codes storage - in production this would be in a database
const VERIFICATION_CODES = new Map<string, { code: string; expiresAt: number }>();

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Check if user exists
    const foundUser = TEMP_USERS.find((u) => u.email === email);
    
    if (!foundUser) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Generate a 6-digit verification code
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = Date.now() + 5 * 60 * 1000; // 5 minutes from now
    
    // Store the verification code
    VERIFICATION_CODES.set(email, { code, expiresAt });
    
    // In production, you would send this code via email using a service like:
    // - SendGrid
    // - AWS SES
    // - Resend
    // - Nodemailer with SMTP
    
    console.log(`Verification code for ${email}: ${code}`);
    
    // For demo purposes, we'll return success
    // In production, you would send the actual email here
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Verification code sent successfully',
        // In development, you might want to return the code for testing
        code: process.env.NODE_ENV === 'development' ? code : undefined
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending verification code:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Export the verification codes map for use in other routes
export { VERIFICATION_CODES };


