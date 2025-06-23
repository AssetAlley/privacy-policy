import React from 'react';
import './privacyFormText.css';
import ApplicantSignatures, {Applicant} from './applicantDetails';

const CreditProviders : React.FC = () => {
    const providers = [
        { "name": "Axsess Today", "websites": ["http://www.axsesstoday.com/"] },
        { "name": "St George Finance Limited (BOM / Bank SA)", "websites": ["http://www.stgeorge.com.au", "http://bankofmelbourne.com.au", "http://www.banksa.com.au"] },
        { "name": "Australian Motor and Marine Finance", "websites": ["http://www.ammf.com.au/"] },
        { "name": "Automotive Financial Services Pty Ltd", "websites": ["http://www.afs.com/"] },
        { "name": "BMW Australia Finance t/as Alphera Financial Services", "websites": ["http://www.alphera.com.au/"] },
        { "name": "BOQ Equipment Finance Limited", "websites": ["http://www.boq.com.au/"] },
        { "name": "Business and Capital Pty Ltd t/as Kikka Capital", "websites": ["http://www.kikka.com.au/"] },
        { "name": "Capital Finance Australia Limited", "websites": ["http://www.capitalfinance.com.au/"] },
        { "name": "Commonwealth Bank of Australia", "websites": ["http://www.commbank.com.au/"] },
        { "name": "Firstmac Asset Funding (Commercial) Pty Ltd", "websites": ["http://www.firstmac.com.au"] },
        { "name": "Finance One", "websites": ["http://www.financeone.com.au"] },
        { "name": "flexicommercial Pty Ltd", "websites": ["http://www.flexicommercial.com.au"] },
        { "name": "Group & General Finance", "websites": ["http://www.groupandgeneral.com"] },
        { "name": "Get Capital Pty Limited", "websites": ["http://www.getcapital.com.au"] },
        { "name": "Dynamoney", "websites": ["https://dynamoney.com"] },
        { "name": "Latitude Financial Services Limitedy", "websites": ["http://www.latitudefinancial.com.au"] },
        { "name": "Liberty Financial Pty Ltd", "websites": ["http://www.liberty.com.au"] },
        { "name": "Macquarie Leasing Pty Ltd", "websites": ["http://www.macquarie.com.au"] },
        { "name": "Metro Finance Pty Ltd", "websites": ["http://www.metro.com.au"] },
        { "name": "Moneytech Group Limited", "websites": ["http://www.moneytech.com.au"] },
        { "name": "Morris Finance Ltd", "websites": ["http://www.morrisfinance.com.au"] },
        { "name": "Moula Money Pty Ltd", "websites": ["http://www.moula.com.au"] },
        { "name": "National Australia Bank Limited", "websites": ["http://www.nab.com.au"] },
        { "name": "Pepper Asset Finance Pty Ltd", "websites": ["http://www.pepperonline.com.au"] },
        { "name": "R.A.C.V. Finance Pty Ltd", "websites": ["http://www.racv.com.au"] },
        { "name": "Ratesetter Australia Pty Ltd", "websites": ["http://www.ratesetter.com.au"] },
        { "name": "RedZed Lending Solutions Pty Ltd", "websites": ["http://www.redzed.com"] },
        { "name": "Selfco Leasing", "websites": ["http://www.selfco.com.au"] },
        { "name": "Spotcap Australia Pty Ltd", "websites": ["http://www.spotcap.com.au"] },
        { "name": "Thorn Equipment Finance Pty Ltd", "websites": ["http://www.thornequipmentfinance.com.au"] },
        { "name": "TL Rentals Pty Ltd", "websites": ["http://www.tlrentals.com.au"] },
        { "name": "Westpac Banking Corporation", "websites": ["http://www.westpac.com.au"] },
        { "name": "Wingate Consumer Finance Pty Ltd t/as Now Finance", "websites": ["http://www.nowfinance.com.au"] },
        { "name": "Grow Finance", "websites": ["http://www.growassetfinance.com.au"] },
        { "name": "Affordable Car Loans", "websites": ["http://www.affordablecarloans.com.au"] },
        { "name": "Branded Financial Services", "websites": ["http://www.brandedfinancial.com.au"] },
        { "name": "Cashflow Finance", "websites": ["http://www.cashflowfinance.com.au"] },
        { "name": "Flexfleet", "websites": ["http://www.flexfleet.com.au"] },
        { "name": "Lumi", "websites": ["https://www.lumi.com.au"] },
        { "name": "Judo", "websites": ["http://www.judo.bank"] },
        { "name": "Flexi", "websites": ["http://www.flexicommercial.com.au"] },
        { "name": "Volkswagen Financial Services", "websites": ["http://www.vwfs.com.au"] },
        { "name": "Allied Retail Finance Pty Ltd", "websites": ["https://abr.business.gov.au/ABN/View/31609859985"] },
        { "name": "Approved Motor Finance", "websites": ["http://www.amfin.com.au"] },
        { "name": "Quest Finance Australia Pty Ltd", "websites": ["http://quest.finance", "http://www.quest.finance"] },
        { "name": "Resimac Asset Finance", "websites": ["http://www.resimacassetfinance.com.au"] },
        { "name": "Grenke", "websites": ["http://grenke.com.au"] },
        { "name": "Scottish Pacific", "websites": ["http://scotpac.com.au"] },
        { "name": "Azora Finance", "websites": ["http://www.azora.com.au/"] },
        { "name": "Lodge IQ Pty Ltd", "websites": ["https://www.lodge.finance"] },
        { "name": "MBF Leasing Pty Ltd / Metrics Business Finance Pty Ltd", "websites": ["https://www.metricsbusinessfinance.com.au/privacy-policy/"] },
        { "name": "BANJO LOANS SME PTY LTD", "websites": ["https://www.banjoloans.com/"] }
    ];

    
    return (
        <div className="grid grid-cols-2 gap-6 p-4">
            <h1>Name of Credit Providers</h1>
            <h1> Websites</h1>
            {providers.map((provider, index) => (
                <React.Fragment key={index}>
                    <p className="font-medium text-sm">{provider.name}</p>
                    <div>
                        {provider.websites.map((website, idx) => (
                            <a key={idx} className="text-sm" href={website}>{website} </a>
                        ))}
                    </div>
                </React.Fragment>
            ))}
        </div>
);}

type PrivacyFormProps = {
  applicant?: Applicant[]; // Changed from typeof ApplicantSignatures to Applicant[]
};

export const PrivacyFormText = ({ applicant }: PrivacyFormProps) => {
  return (
    <>
      <img
        src="/Asset Alley Logo_ColourScreenUse.png"
        width={400}
        height={200}
        style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
        alt="Asset Alley Logo"
      />
      <h1
        style={{
          paddingTop: "12pt",
      paddingLeft: "1pt",
      textAlign: "center"
    }}
  >
    PRIVACY DISCLOSURE STATEMENT &amp; CONSENT
  </h1>
  <h2
    style={{
      paddingTop: "13pt",
      paddingLeft: "5pt",
    }}
  >
    OVERVIEW
  </h2>
  <p className="p1">
    Asset Alley Pty Ltd 
  </p>
  <p className="p1">
    ABN: 84 636 666 709
  </p>
  <p className="p1">
    14 Lexington Dr, Bella Vista, NSW 
    2153
  </p>
  <p
    style={{
      paddingTop: "11pt",
      lineHeight: "185%",
    }}
  >
    As an authorised credit representative of Connective Credit Services Pty Ltd
  </p>
  <p>
        ABN: 51 143 651 496
  </p>
  <p
    style={{
      lineHeight: "14pt",
    }}
  >
    ACL: 389328
  </p>
  <p
  >
    Level 20, 567 Collins Street Melbourne VIC 3000
  </p>
  <p >
    <br />
  </p>
  <p >
    We collect information about you for the purposes you agree to in this
    Privacy Disclosure Statement and Consent (‘Consent’). When you sign below,
    you agree we can, consistently with Australia’s privacy and credit reporting
    laws, collect, use and exchange consumer and/or commercial credit and
    personal information (‘information’) about you for those purposes.
  </p>
  <p >
    <br />
  </p>
  <h2 style={{ paddingLeft: "5pt"}}>
    Privacy Disclosure Statement and Consent
  </h2>
  <p
  >
    We are collecting information about you, as applicable:
  </p>
  <p>
    To source for you, or a company of which you are a director:
  </p>
  <ul style={{ listStyleType: "disc", paddingLeft: "20pt"}}>
    <li>
        <p>Consumer credit for personal, household, domestic
  or residential investment purposes</p>
    </li>
    <li>
      Commercial credit for business purposes; or
    </li>
    <li>
        Other services stated in this Consent; or
    </li>
  </ul>
  <p
  >
    To support a guarantor application you will provide.
  </p>
  <p
    style={{
      paddingTop: "3pt",
    }}
  >
    As your broker, we require the information we collect from you to assess
    your credit, or guarantor, application or the credit application of a
    company of which you are a director, to source a suitable credit provider
    and any required insurances and to manage the application process, where
    required. If you do not provide the information sought, we may be unable to
    process your application, or the company’s application, or we may be limited
    in the other services we can offer you or the company.
  </p>
  <p >
    <br />
  </p>
  <h2 style={{ paddingLeft: "5pt"}}>
    Your information - Collection and Disclosure
  </h2>
  <p
  >
    When we collect information from you in the credit or guarantor application
    process, we use that information in a number of ways to assess your
    application and, where appropriate, to source a suitable credit provider or
    lessor and / or insurance provider. 
  </p>
  <p>
    We may, as appropriate:
  </p>
  <ul style={{ listStyleType: "disc", paddingLeft: "20pt"}}>
    <li>
    Disclose your identification information to a consumer credit reporting
    service (‘Consumer CRS’) and/or a commercial credit reporting service
    (‘Commercial CRS’), if you wish us to obtain a report on your behalf
    (references to a ‘CRS’ could be to either a Consumer CRS or a Commercial
    CRS);
    </li>
    <li>
    Use any information a CRS provides in its report to assist us to
    preliminarily assess your credit or guarantor application;
    </li>
    <li>
    Disclose your information to an insurer or insurers to source any insurances
    you wish to obtain; and
    </li>
    <li>
    Disclose your information to our advisers, aggregators, licensees and other
    financial intermediaries, a credit provider or credit providers to apply for
    finance on your behalf.
    </li>
  </ul>
  <p
  >
    The information we obtain from you is used, subject to compliance with
    Australia’s privacy and credit reporting laws, only for the purposes listed
    in this Consent and is not disclosed to any other person except with your
    permission or as permitted, or required, by law.
  </p>
  <p >
    <br />
  </p>
  <h2 style={{ paddingLeft: "5pt"}}>
    Credit Providers
  </h2>
  <p >
    <br />
  </p>
  <p >
    As part of providing our services to you, we may undertake tasks for a
    credit provider which are reasonably necessary to manage the application
    process. When doing so, we are acting as agent for the credit provider, with
    the same privacy law requirements applying to both of us. We may submit your
    application to one or more credit providers. Those credit providers and
    their website addresses are set out in the Schedule 1 at the
    end of this document.
  </p>
  <p >
    <br />
  </p>
  <p >
    A credit provider, to whom we submit an application, may disclose
    information about you to, and collect information about you from, one or
    more CRS.
  </p>
  <p >
    <br />
  </p>
  <p >
    The website of each credit provider contains details of each CRS with which
    it deals and other details about information held about you, including
    whether that information may be held or disclosed overseas and, if so, in
  </p>
  <p
    style={{
      paddingTop: "3pt",
    }}
  >
    which countries. The websites also describe your key rights. These details
    may be described on the credit providers’ websites as ‘notifiable matters’,
    ‘privacy policy’, ‘credit reporting policy’ or ‘privacy disclosure statement
    and consent’, or similar.
  </p>
  <p
    style={{
      paddingTop: "11pt",
      paddingLeft: "23pt",
      textIndent: "-18pt",
    }}
  >
    For each Consumer CRS a credit provider uses, the website details will
    include the following specific information:
  </p>
  <ul style={{ listStyleType: "disc", paddingLeft: "20pt"}}>
    <li>
        That the CRS may include information the credit provider 
        discloses about you to other credit providers to assess your credit worthiness        
    </li>
    <li>
    That, if you become overdue in making consumer credit 
    payments or you commit a serious credit infringement, the credit provider may disclose that information to the CRS        
    </li>
    <li>
     How you can obtain the credit provider’s and/or the CRS’s policies about managing your information       
    </li>
    <li>
    Your right to access and/or correct information 
    held about you and to complain about conduct that may breach the privacy and credit reporting laws        
    </li>
    <li>
     Your right to request a CRS not to undertake pre-screening for purposes of direct marketing by a credit provider        
    </li>
    <li>
         Your right to request a CRS not to release information about you if you believe you are a victim of fraud
    </li>
  </ul>
  <p >
    <br />
  </p>
  <p >
    This detail will also be included by the credit provider who approves your
    application in the privacy disclosure statement and consent document it will
    provide to you. Each credit provider website includes information on how to
    contact it and how to obtain a copy of its privacy documents in a form that
    suits you (e.g.
  </p>
  <p
  >
    hardcopy or email).
  </p>
  <p >
    <br />
  </p>
  <h2 style={{ paddingLeft: "5pt"}}>
    Privacy Disclosure Statement and Consent | Equipment Finance 2
  </h2>
  <p
  >
    Your rights
  </p>
  <p
  >
    You have the right to ask:
  </p>
  <ul>
    <li>
      Us to provide you with all the information we hold about you
    </li>
    <li>
      Us to correct the information we hold if it is incorrect
    </li>
    <li>
      Us for copies of our privacy policy and this document, in a form that suits
      you (e.g. hardcopy or email)
    </li>
    <li>
      A Consumer CRS not to use your information for direct marketing assessment
      purposes, including pre- screening
    </li>
    <li>
     A CRS to provide you with a copy of any information it holds about you
    </li>
  </ul>
  <p>
    You can gain access to the information we hold about you by contacting our
    Privacy Officer at the address above or by telephone on or email at
  </p>
  <p>
    In some cases an administration fee may be charged to cover the cost of
    providing the information. Our Privacy Policy also deals with our complaints
    process and is available on our website at
  </p>
  <p>
    or we will provide you with a copy if you ask us.
  </p>
  <p
    style={{
      paddingTop: "3pt",
    }}
  >
    Schedule 2 at the end of this document sets out the contact details for each
    CRS.
  </p>
  <p >
    <br />
  </p>
  <h2 style={{ paddingLeft: "5pt"}}>
    Disclosure and Consent
  </h2>
  <p
    style={{
      paddingLeft: "23pt",
      textIndent: "-18pt",
      lineHeight: "26pt",
    }}
  >
    By signing below, you agree we may: <span />
  </p>
  <p>
    Use your information:
  </p>
  <ul>
    <li>
        To assess your consumer or commercial credit and/or guarantee application
        and/or to assess a credit application by a company of which you are a
        director
    </li>
    <li>
        To source any finances you require
    </li>
    <li>
        To source any insurances you require
    </li>
    <li>
        As the law authorises or requires;
    </li>
    <li>
        Disclose to, and obtain from, any prospective credit provider or insurer, information about you that is reasonably necessary to obtain the finance and insurances you require;
    </li>
    <li>
 Obtain from, and disclose to, any third party, information about you, the applicant(s) or guarantor(s) that is reasonably necessary to assist you obtain the finance and insurances required;        
    </li>
    <li>
    Provide your information, including your credit report(s), to one or more of the credit providers specified in
    Schedule 1 at the end of this document so they can assess your application, or the application of a company
    of which you are a director, or your suitability as a guarantor
    </li>
    <li>
        Provide information about you to a guarantor, or prospective guarantor;
    </li>
    <li>
    Provide you, or the company of which you are a director, with offers or information of other goods or
    services we, or any of our associated entities, may be able to provide to you or the company, unless you tell
    us not to;
    </li>
    <li>
        Disclose your information to the extent permitted by law to other organisations that provide us with services,
        such as contractors, agents, printers, mail houses, lawyers, document custodians, securitisers and computer
        systems consultants or providers, so they can perform those services for us. Some of which may be located
        overseas.
    </li>
    <li>
        Disclose your information to any other organisation that may wish to acquire, or has acquired, an interest in
        our business or any rights under your contract with us, or the contract with us of a company of which you are
        a director. You also agree and consent to, as appropriate:
    </li>
    <li>
        A Consumer CRS disclosing information to one or more credit providers specified in Schedule 1 at the end
        of this document for the purpose of assessing your application for consumer or commercial credit or your
        guarantor application, and/or assessing a credit application by a company of which you are a director
    </li>
    <li>
        When you are a prospective guarantor, a credit provider using that information to assess your suitability as a
        guarantor
    </li>
    <li>
        A credit provider disclosing your information (including information obtained by it from a Consumer CRS)
        to a guarantor, or a prospective guarantor
    </li>
    <li>
        A credit provider disclosing to another credit provider, to your agent, such as us as your broker, or to a
        servicer, for a particular purpose, information it holds about you
    </li>
  </ul>
  <p >
    <br />
  </p>
  <h2 style={{ paddingLeft: "5pt"}}>
    Extended Effectiveness for Commercial Credit
  </h2>
  <p
  >
    Your agreement and consent to the disclosures and consents in this document
    will be effective for a period of 12 months, but only in relation to
    commercial credit. Your agreement to this ceases when you either withdraw
  </p>
  <p>
    it by contacting us using our details above or 12 months after you sign
    below, whichever first occurs. This will
    allow us to continue to provide our services to you without the need to ask
    you to sign a new privacy statement and consent each time you require
    commercial credit within a 12 month period. The extended effectiveness does
    not apply in relation to consumer credit. Where the applicant, or guarantor,
    is a company of which you are a director,
    you consent to the disclosure and use of your information, in addition to
    the company’s information, in each of the ways specified in this document.
  </p>
  <p >
    <br />
  </p>
  <h2 style={{ paddingLeft: "5pt"}}>
    Authorisation
  </h2>
  <p
  >
    By signing this document, you authorise us to make a request on your behalf
    to obtain information about you from one or more credit reporting service(s)
    and credit provider(s). That information will assist us in providing our
    services to you.
  </p>
  <p >
    <br />
  </p>
  <h2 style={{ paddingLeft: "1pt",  textAlign: "center" }}>
    APPLICANT / DIRECTOR / GUARANTOR SIGNATURE
  </h2>
  <ApplicantSignatures applicants={applicant}/>
  <p >
    <br />
  </p>
  <p style={{ paddingLeft: "2pt",  textAlign: "center" }}>
    <span className="s4" style={{ backgroundColor: "#B6B6B6" }}>
      {" "}
    </span>
    <span className="s5" style={{ backgroundColor: "#B6B6B6" }}>
      SCHEDULE 1 - CREDIT PROVIDERS{" "}
    </span>
  </p>
    <CreditProviders/>
  <p >
    <br />
  </p>

  <h2 style={{ paddingLeft: "5pt"}}>
    SCHEDULE 2
  </h2>
  <p
  >
    CONSUMER / COMMERCIAL CREDIT REPORTING SERVICES
  </p>
    <p>Name</p>
    <p>Website / Email Address</p>
    <p>Telephone</p>
    <p>Experion</p>
    <p>www.experian.com.au</p>
    <p>
        (03) 8622 1600
    </p>
    <p>Dun &amp; Bradstreet</p>
    <p>pac.austral@dnb.com.au</p>
    <p>1300 734 806</p>
    <p> 8:30am - 5:30pm (Monday – Friday)</p>
    <p></p><p></p>
    <p>Tasmanian Collection Service</p>
    <p>www.tascol.com.au</p>
    <p>(03) 6213 5555</p>
    <p>Equifax</p>
    <p>www.equifax.com.au/contact</p>
    <p>N/A</p>
</>
    )
}