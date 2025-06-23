export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { PrivacyFormResponse } from "@/lib/applicantDetails";

export async function GET() {
  const applicantData = [
    {
      id: 1,
      signature: "Test Signature",
      firstName: "First_Name",
      lastName: "Last",
      signedDate: "2025-06-23",
      signedIp: "192.168.1.1"
    },
  ];

  const host = headers().get('host');
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const baseUrl = `${protocol}://${host}`;

  try {
    const response = await fetch(`${baseUrl}/api/signForm`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ applicants: applicantData })
    });

    // If the response isn't JSON, it likely means it hit a 404 or error page
    const contentType = response.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      const text = await response.text();
      console.error('Non-JSON response:', text);
      return NextResponse.json({ success: false, error: 'Received non-JSON response' }, { status: 500 });
    }

    const result: PrivacyFormResponse = await response.json();

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: 'Privacy form generated successfully',
        html: result.html
      });
    } else {
      return NextResponse.json({
        success: false,
        error: result.error
      }, { status: 400 });
    }

  } catch (error) {
    console.error('Request failed:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to generate privacy form',
    }, { status: 500 });
  }
}
