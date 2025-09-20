import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Open Source License',
  description: 'Addocu Open Source License - CC BY-NC-SA 4.0 license details and usage rights.',
};

export default function LicensePage() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Open Source License</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Creative Commons License</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Addocu is licensed under the{' '}
            <a 
              href="https://creativecommons.org/licenses/by-nc-sa/4.0/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1A5DBB] hover:underline"
            >
              Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License
            </a>.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">You are free to:</h3>
            <ul className="list-disc pl-6 space-y-2 text-blue-800">
              <li><strong>Share</strong> — copy and redistribute the material in any medium or format</li>
              <li><strong>Adapt</strong> — remix, transform, and build upon the material</li>
              <li><strong>Use</strong> — for personal or client projects</li>
              <li><strong>Distribute</strong> — share the tool with others</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">License Conditions</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-yellow-900 mb-3">Under the following terms:</h3>
            <ul className="list-disc pl-6 space-y-3 text-yellow-800">
              <li>
                <strong>Attribution</strong> — You must give appropriate credit to Addocu, provide a link to the license, 
                and indicate if changes were made. You may do so in any reasonable manner, but not in any way that 
                suggests the licensor endorses you or your use.
              </li>
              <li>
                <strong>NonCommercial</strong> — You may not use the material for commercial purposes without explicit permission.
              </li>
              <li>
                <strong>ShareAlike</strong> — If you remix, transform, or build upon the material, you must distribute 
                your contributions under the same license as the original.
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">What You Cannot Do</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <ul className="list-disc pl-6 space-y-2 text-red-800">
              <li>Sell this tool or any derivative without explicit permission</li>
              <li>Remove attribution to the original Addocu project</li>
              <li>Create commercial versions without authorization</li>
              <li>Use the Addocu name or logo for commercial purposes</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Commercial Use</h2>
          <p className="text-gray-700 leading-relaxed">
            If you're interested in commercial licensing or want to create a commercial version of Addocu, 
            please contact us at{' '}
            <a 
              href="mailto:hola@addocu.com"
              className="text-[#1A5DBB] hover:underline"
            >
              hola@addocu.com
            </a>{' '}
            to discuss licensing options.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Source Code</h2>
          <p className="text-gray-700 leading-relaxed">
            The complete source code is available on{' '}
            <a 
              href="https://github.com/jrodeiro5/addocu" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1A5DBB] hover:underline"
            >
              GitHub
            </a>.{' '}
            We encourage contributions, feedback, and community involvement in improving Addocu.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Attribution Example</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <code className="text-sm text-gray-700">
              This project uses Addocu (https://addocu.com) licensed under CC BY-NC-SA 4.0
            </code>
          </div>
        </section>
      </div>
    </div>
  );
}
