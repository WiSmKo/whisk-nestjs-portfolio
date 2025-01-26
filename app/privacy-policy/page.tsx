import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR PRIVACY POLICY

// You are an excellent lawyer.

// I need your help to write a simple privacy policy for my website. Here is some context:
// - Website: https://thewhisk.dev
// - Name: theWhisk
// - Description: A personal portfolio and resume for a software engineer
// - User data collected: name, email if provided
// - Non-personal data collection: web cookies
// - Purpose of Data Collection: Communication if solicited
// - Data sharing: we do not share the data with any other parties
// - Children's Privacy: we do not collect any data from children
// - Updates to the Privacy Policy: reflected here
// - Contact information: william@thewhisk.dev

// Please write a simple privacy policy for my site. Add the current date.  Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Privacy Policy | ${config.appName}`,
  canonicalUrlRelative: "/privacy-policy",
});

const PrivacyPolicy = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>{" "}
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Privacy Policy for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Effective Date: January 26, 2025

            Welcome to theWhisk.dev. Your privacy is important to us. This policy outlines how we handle your information.

            1. Information We Collect
            Personal Data: Name and email, if voluntarily provided.
            Non-Personal Data: Web cookies to enhance website functionality.
            2. Purpose of Data Collection
            We collect personal data solely for communication purposes when solicited by you.

            3. Data Sharing
            We do not share your data with any third parties.

            4. Children's Privacy
            We do not knowingly collect any data from children. If you believe a child has provided us with their information, please contact us at william@thewhisk.dev.

            5. Updates to This Policy
            This privacy policy may be updated periodically. Any changes will be reflected on this page.

            6. Contact Information
            If you have any questions or concerns about this privacy policy, please contact us at william@thewhisk.dev.

            Thank you for trusting theWhisk.dev.`}
        </pre>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
