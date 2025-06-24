export const config = {
  runtime: 'nodejs',
}

import { NextRequest, NextResponse } from 'next/server';
import { PrivacyFormRequest, PrivacyFormResponse, Applicant } from '@/lib/applicantDetails';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    body.applicants[0].signedIp = request.headers.get('x-forwarded-for') || '';
    const { applicants }: PrivacyFormRequest = body;

    // Validation
    if (!applicants || !Array.isArray(applicants) || applicants.length === 0) {
      return NextResponse.json({
        success: false,
        error: 'At least one applicant is required'
      }, { status: 400 });
    }

    // Dynamically import React rendering to avoid static analysis
    const { renderToString } = await import('react-dom/server');
    const { PrivacyFormText } = await import('@/lib/privacyFormText');

    // Generate the privacy form HTML with the provided applicants
    const formHtml = renderToString(
      PrivacyFormText({ applicant: applicants })
    );

    return NextResponse.json({
      success: true,
      html: formHtml
    });
  } catch (error) {
    console.error('Privacy form generation error:', error);
    return NextResponse.json({
      success: false,
      error: 'Internal server error'
    }, { status: 500 });
  }
}

function validateApplicant(applicant: any): applicant is Applicant {
  return (
    typeof applicant === 'object' &&
    typeof applicant.id === 'number' &&
    typeof applicant.signature === 'string' &&
    typeof applicant.firstName === 'string' &&
    typeof applicant.lastName === 'string' &&
    typeof applicant.signedDate === 'string' &&
    typeof applicant.signedIp === 'string' &&
    applicant.signature.trim() !== '' &&
    applicant.firstName.trim() !== '' &&
    applicant.lastName.trim() !== '' &&
    applicant.signedDate.trim() !== '' &&
    applicant.signedIp.trim() !== ''
  );
}