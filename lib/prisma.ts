import { PrismaClient } from './generated/prisma'

let PrismaClientClass;

try {
  // Try to import the real Prisma client
  const { PrismaClient } = require('@prisma/client');
  PrismaClientClass = PrismaClient;
} catch (error) {
  // Fallback to minimal mock for preview deployments
  PrismaClientClass = class {
    constructor() {}
    $connect = () => Promise.resolve();
    $disconnect = () => Promise.resolve();
  };
}

const globalForPrisma = globalThis as unknown as {
  prisma: InstanceType<typeof PrismaClientClass> | undefined
}

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClientClass({
    log: ['query'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma