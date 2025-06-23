export interface Applicant {
  id: number;
  signature: string;
  firstName: string;
  lastName: string;
  signedDate: string;
  signedIp: string;
}

interface SignatureSectionProps {
  id: number;
  signature: string;
  firstName: string;
  lastName: string;
  signedDate: string;
  signedIp: string;
}



const SignatureSection: React.FC<SignatureSectionProps> = ({ 
  id, signature, firstName, lastName, signedDate, signedIp 
}) => (
  <div className="grid-item">
    <div className="bg-[#b6b6b6] p-2">
      <p className="font-medium text-sm">APPLICANT/DIRECTOR/GUARANTOR {id}</p>
    </div>
    <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 p-4">
      <p className="text-sm font-medium">Signature</p>
      <p className="text-sm">{signature}</p>
     
      <p className="text-sm font-medium">Full Name</p>
      <div className="text-sm">
        <p>{firstName}</p>
        <p>{lastName}</p>
      </div>
     
      <p className="text-sm font-medium">Date</p>
      <p className="text-sm">{signedDate}</p>
     
      <p className="text-sm font-medium">IP Address</p>
      <p className="text-sm">{signedIp}</p>
    </div>
  </div>
);
interface ApplicantSignaturesProps {
  applicants?: Applicant[];
  isTemplate?: boolean;
  maxApplicants?: number;
}

export interface PrivacyFormRequest {
  applicants: Applicant[];
}

export interface PrivacyFormResponse {
  success: boolean;
  html?: string;
  error?: string;
}

const ApplicantSignatures: React.FC<ApplicantSignaturesProps> = ({ 
  applicants, 
  isTemplate = false,
  maxApplicants = 3 
}) => {
  // Generate template data with unique placeholders for each applicant
  const generateTemplateApplicants = (count: number): Applicant[] => {
    return Array.from({ length: count }, (_, index) => ({
      id: index + 1,
      signature: `APPLICANT_${index + 1}_SIGNATURE_URL`,
      firstName: `APPLICANT_${index + 1}_FIRSTNAME`,
      lastName: `APPLICANT_${index + 1}_LASTNAME`,
      signedDate: `APPLICANT_${index + 1}_SIGNED_DATE`,
      signedIp: `APPLICANT_${index + 1}_SIGNED_IP`
    }));
  };

  // Use provided applicants or generate template data
  const displayApplicants = applicants || generateTemplateApplicants(maxApplicants);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {displayApplicants.map((applicant: Applicant) => (
        <SignatureSection
          key={applicant.id}
          id={applicant.id}
          signature={applicant.signature}
          firstName={applicant.firstName}
          lastName={applicant.lastName}
          signedDate={applicant.signedDate}
          signedIp={applicant.signedIp}
        />
      ))}
    </div>
  );
};

export default ApplicantSignatures;