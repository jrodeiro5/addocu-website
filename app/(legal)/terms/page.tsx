import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Addocu Terms of Service - Terms and conditions for using our Google Sheets Add-on.',
};

export default function TermsPage() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
      
      <p className="text-gray-600 mb-6">
        <strong>Last updated:</strong> January 2025
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptance of Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            By using Addocu, you agree to these Terms of Service. If you do not agree to these terms, 
            please do not use our Add-on.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Description of Service</h2>
          <p className="text-gray-700 leading-relaxed">
            Addocu is a free, open-source Google Sheets Add-on that helps digital marketers audit 
            and document their Google marketing stack including Google Analytics 4, Google Tag Manager, 
            and Looker Studio.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">License and Usage</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Addocu is released under the{' '}
            <a 
              href="https://creativecommons.org/licenses/by-nc-sa/4.0/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1A5DBB] hover:underline"
            >
              Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License
            </a>.
          </p>
          <p className="text-gray-700 leading-relaxed">
            You are free to use, share, and adapt the tool with proper attribution, 
            but commercial use is prohibited without explicit permission.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Responsibilities</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Provide valid Google Cloud API credentials</li>
            <li>Ensure you have appropriate permissions for the Google services you audit</li>
            <li>Use the tool in compliance with Google's Terms of Service</li>
            <li>Not use the tool for malicious or unauthorized purposes</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Disclaimers</h2>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              <strong>No Warranty:</strong> Addocu is provided "as is" without any warranties. 
              We do not guarantee the accuracy, reliability, or availability of the service.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Google Affiliation:</strong> Addocu is not affiliated with Google LLC. 
              Google Analytics, Google Tag Manager, and Looker Studio are trademarks of Google LLC.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Data Responsibility:</strong> You are responsible for the security and 
              appropriate use of your Google API credentials and data.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
          <p className="text-gray-700 leading-relaxed">
            To the maximum extent permitted by law, Addocu and its contributors shall not be liable 
            for any indirect, incidental, special, or consequential damages arising from your use 
            of the Add-on.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            We may update these Terms of Service from time to time. Continued use of Addocu 
            constitutes acceptance of any changes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have questions about these Terms of Service, please contact us at{' '}
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
