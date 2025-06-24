// app/test-privacy-form/page.tsx
'use client';

import { useState } from 'react';
import { PrivacyFormResponse } from "@/lib/applicantDetails";

export default function TestPrivacyForm() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PrivacyFormResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const testApiCall = async () => {
    setLoading(true);
    setError(null);
    setResult(null);

    const applicantData = [
      {
        id: 1,
        signature: "John Smith",
        firstName: "John",
        lastName: "Smith",
        signedDate: "2025-06-23",
        signedIp: "192.168.1.1"
      },
      {
        id: 2,
        signature: "Jane Doe",
        firstName: "Jane",
        lastName: "Doe", 
        signedDate: "2025-06-23",
        signedIp: "192.168.1.2"
      }
    ];

    try {
      const response = await fetch('https://asset-alley-privacy.netlify.app/api/signForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ applicants: applicantData })
      });

      const data: PrivacyFormResponse = await response.json();
      setResult(data);
      
      if (!data.success) {
        setError(data.error || 'Unknown error occurred');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Network error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-6xl background-white">
      <h1 className="text-3xl font-bold mb-6">Privacy Form API Test</h1>
      
      <div className="mb-6">
        <button
          onClick={testApiCall}
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-2 px-4 rounded"
        >
          {loading ? 'Testing API...' : 'Test Privacy Form API'}
        </button>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <strong>Error:</strong> {error}
        </div>
      )}

      {result && !result.success && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <strong>API Error:</strong> {result.error}
        </div>
      )}

      {result && result.success && result.html && (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Generated Privacy Form:</h2>
          
          {/* Raw HTML Display */}
          <div className="bg-gray-100 p-4 rounded">
            <h3 className="font-semibold mb-2">Raw HTML Response:</h3>
            <pre className="text-sm overflow-x-auto whitespace-pre-wrap bg-white p-2 rounded border">
              {result.html}
            </pre>
          </div>

          {/* Rendered HTML */}
          <div className="border-2 border-gray-300 p-4 rounded">
            <h3 className="font-semibold mb-2">Rendered Form:</h3>
            <div 
              dangerouslySetInnerHTML={{ __html: result.html }}
              className="privacy-form-content"
            />
          </div>
        </div>
      )}
    </div>
  );
}