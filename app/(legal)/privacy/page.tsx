import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Addocu Privacy Policy - How we handle your data and protect your privacy.',
};

export default function PrivacyPage() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
      
      <p className="text-gray-600 mb-6">
        <strong>Last updated:</strong> January 2025
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            Addocu is committed to protecting your privacy. This Privacy Policy explains how we 
            collect, use, and safeguard your information when you use our Google Sheets Add-on.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data We Access</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Addocu requires access to the following data to function properly:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Google Sheets:</strong> Read and write access to create audit reports</li>
            <li><strong>Google Analytics:</strong> Read-only access to GA4 configuration data</li>
            <li><strong>Google Tag Manager:</strong> Read-only access to container configurations</li>
            <li><strong>Looker Studio:</strong> Read-only access to report and data source information</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Data</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Generate comprehensive audit reports in your Google Sheets</li>
            <li>Provide configuration insights and recommendations</li>
            <li>Store your API key securely within your Google account using Google's PropertiesService</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
          <p className="text-gray-700 leading-relaxed">
            <strong>Your data never leaves your Google account.</strong> Addocu runs entirely within 
            Google's secure infrastructure. We do not:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
            <li>Store your data on external servers</li>
            <li>Share your data with third parties</li>
            <li>Modify your Google Analytics, GTM, or Looker Studio configurations</li>
            <li>Access your data outside of the Add-on execution context</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Open Source Transparency</h2>
          <p className="text-gray-700 leading-relaxed">
            Addocu is fully open source. You can review our complete codebase on{' '}
            <a 
              href="https://github.com/jrodeiro5/addocu" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1A5DBB] hover:underline"
            >
              GitHub
            </a>{' '}
            to understand exactly how your data is processed.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us at{' '}
            <a 
              href="mailto:hola@addocu.com"
              className="text-[#1A5DBB] hover:underline"
            >
              hola@addocu.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
