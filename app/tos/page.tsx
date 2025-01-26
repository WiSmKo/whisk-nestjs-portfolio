import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR TERMS OF SERVICE

// You are an excellent lawyer.

// I need your help to write a simple Terms & Services for my website. Here is some context:
// - Website: https://thewhisk.dev
// - Name: theWhisk
// - Contact information: william@thewhisk.dev
// - Description: A personal portfolio and resume for a software engineer
// - Ownership: The information is purely for reference, it is personal and not for commercial use and cannot be reused or copied.
// - User data collected: name and email if provided
// - Non-personal data collection: web cookies
// - Link to privacy-policy: https://thewhisk.dev/privacy-policy
// - Governing Law: Malta
// - Updates to the Terms: this page

// Please write a simple Terms & Services for my site. Add the current date. Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Terms and Conditions | ${config.appName}`,
  canonicalUrlRelative: "/tos",
});

const TOS = () => {
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
          </svg>
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Terms and Conditions for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Effective Date: January 26, 2025

            Welcome to theWhisk.dev! By accessing or using this website, you agree to the following terms and conditions.

            1. Ownership and Use of Content
            The content provided on theWhisk.dev is personal and for reference purposes only. All rights are reserved, and no material may be reused, copied, or distributed without explicit written consent.

            2. No Commercial Use
            The website and its content are not intended for commercial use. Any unauthorized commercial use is strictly prohibited.

            3. Data Collection
            The website may collect the following data:

            Personal Data: Name and email, if voluntarily provided.
            Non-Personal Data: Web cookies to enhance website functionality.
            For details on how this data is handled, refer to our Privacy Policy.

            4. Privacy Policy
            For more information on how we handle privacy matters, please refer to our Privacy Policy.

            5. Updates to the Terms
            These terms may be updated periodically. Any changes will be reflected on this page.

            6. Governing Law
            These terms are governed by and construed in accordance with the laws of Malta.

            7. Contact Information
            If you have any questions or concerns, please contact us at william@thewhisk.dev.

            Thank you for visiting theWhisk.dev!`}
        </pre>
      </div>
    </main>
  );
};

export default TOS;
