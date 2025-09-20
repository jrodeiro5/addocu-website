import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy for Addocu',
  description: 'Learn how Addocu accesses, uses, and protects your data. We are committed to user privacy and transparency.',
};

export default function PrivacyPage() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
      
      <p className="text-gray-600 mb-6">
        <strong>Last Updated:</strong> September 20, 2025
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            Welcome to Addocu ("we," "our," or "us"). We are committed to protecting your privacy. This Privacy Policy explains how Addocu, a Google Sheets™ Add-on (the "Add-on"), accesses, uses, and safeguards your information when you use our service. By installing and using the Add-on, you agree to the terms of this policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Access</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Addocu is a documentation tool. To function, it requires access to specific information within your Google account. We are committed to the principle of minimal data access.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">a) User-Provided Information</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Google Cloud API Key:</strong> You voluntarily provide this key in the Add-on's configuration sidebar. It is stored securely within your personal Google account's `PropertiesService` and is never transmitted to or stored on our servers.</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">b) Information Accessed via Google APIs</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Add-on accesses data on your behalf using Google's secure OAuth 2.0 protocol. This data is accessed **on-demand** each time you run a sync and is **never stored or collected by us**. The data we access is limited to configuration metadata from the following services, as permitted by the scopes you authorize:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Google Sheets (`.../auth/spreadsheets`):</strong> To create new sheets and write the audit data into your active spreadsheet.</li>
            <li><strong>Google Analytics 4 (`.../auth/analytics.readonly`):</strong> To read metadata about your properties, custom dimensions, metrics, and data streams.</li>
            <li><strong>Google Tag Manager (`.../auth/tagmanager.readonly`):</strong> To read metadata about your containers, tags, triggers, and variables.</li>
            <li><strong>Looker Studio (`.../auth/datastudio`):</strong> To read metadata about your reports and data sources.</li>
            <li><strong>External Requests (`.../auth/script.external_request`):</strong> To allow the script to call the Google APIs.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
           <p className="text-gray-700 leading-relaxed mb-4">
            The information accessed is used exclusively for the following purposes:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>To fetch configuration metadata from the specified Google services.</li>
            <li>To write the fetched metadata into the Google Sheet you are currently using.</li>
            <li>To perform connectivity diagnostics.</li>
          </ul>
           <p className="text-gray-700 leading-relaxed mt-4">
            <strong>We explicitly do not:</strong>
          </p>
           <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
            <li>Store, copy, or log any of your metadata on external servers.</li>
            <li>Share your data with any third parties.</li>
            <li>Modify your configurations in Google Analytics, GTM, or Looker Studio.</li>
            <li>Use your information for advertising or any other purpose not directly related to the Add-on's core functionality.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Open Source Transparency</h2>
          <p className="text-gray-700 leading-relaxed">
            Addocu is a fully open-source project. You can review our complete codebase on{' '}
            <a 
              href="https://github.com/jrodeiro5/addocu" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1A5DBB] hover:underline"
            >
              our GitHub Repository
            </a>{' '}
            to independently verify how your data is handled.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Children's Privacy</h2>
          <p className="text-gray-700 leading-relaxed">
            Our service is not intended for use by anyone under the age of 13. We do not knowingly collect personally identifiable information from children.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Changes to This Privacy Policy</h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us at{' '}
            <a 
              href="mailto:hello@addocu.com"
              className="text-[#1A5DBB] hover:underline"
            >
              hola@addocu.com
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}