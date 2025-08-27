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

// Import verification codes from the send-verification route
// In production, this would be stored in a database
let VERIFICATION_CODES = new Map<string, { code: string; expiresAt: number }>();

export async function POST(request: NextRequest) {
  try {
    const { email, code } = await request.json();

    if (!email || !code) {
      return NextResponse.json(
        { error: 'Email and verification code are required' },
        { status: 400 }
      );
    }

    // Check if verification code exists and is valid
    const storedData = VERIFICATION_CODES.get(email);
    
    if (!storedData) {
      return NextResponse.json(
        { error: 'No verification code found for this email' },
        { status: 400 }
      );
    }

    // Check if code has expired
    if (Date.now() > storedData.expiresAt) {
      VERIFICATION_CODES.delete(email);
      return NextResponse.json(
        { error: 'Verification code has expired' },
        { status: 400 }
      );
    }

    // Check if code matches
    if (storedData.code !== code) {
      return NextResponse.json(
        { error: 'Invalid verification code' },
        { status: 400 }
      );
    }

    // Find user
    const foundUser = TEMP_USERS.find((u) => u.email === email);
    
    if (!foundUser) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Remove the used verification code
    VERIFICATION_CODES.delete(email);
    
    // In production, you would create a session or JWT token here
    const userData = {
      email: foundUser.email,
      name: foundUser.name,
      role: foundUser.role,
    };

    return NextResponse.json(
      { 
        success: true, 
        message: 'Verification successful',
        user: userData
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error verifying code:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Function to set verification codes (for testing purposes)
export function setVerificationCodes(codes: Map<string, { code: string; expiresAt: number }>) {
  VERIFICATION_CODES = codes;
}


