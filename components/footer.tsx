import Link from 'next/link';
import { Github, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/images/logos/addocu/addocu_logo.webp" 
                alt="Addocu Logo" 
                className="h-10 w-auto"
              />
              <span className="text-xl font-semibold text-gray-900">Addocu</span>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Audit and Document Your Google Marketing Stack in Seconds
            </p>
            <div className="flex space-x-4">
              <Link 
                href="https://github.com/jrodeiro5/addocu" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#1A5DBB] transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link 
                href="mailto:hola@addocu.com"
                className="text-gray-400 hover:text-[#1A5DBB] transition-colors"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/features" 
                  className="text-sm text-gray-600 hover:text-[#1A5DBB] transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link 
                  href="https://github.com/jrodeiro5/addocu#-installation--setup" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-[#1A5DBB] transition-colors"
                >
                  Installation Guide
                </Link>
              </li>
              <li>
                <Link 
                  href="https://github.com/jrodeiro5/addocu/blob/main/docs/troubleshooting.md" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-[#1A5DBB] transition-colors"
                >
                  Troubleshooting
                </Link>
              </li>
              <li>
                <Link 
                  href="https://github.com/jrodeiro5/addocu#-roadmap--future" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-[#1A5DBB] transition-colors"
                >
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="https://github.com/jrodeiro5/addocu/discussions" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-[#1A5DBB] transition-colors"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link 
                  href="https://github.com/jrodeiro5/addocu#-contributing" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-[#1A5DBB] transition-colors"
                >
                  Contributing
                </Link>
              </li>
              <li>
                <Link 
                  href="https://github.com/jrodeiro5/addocu/issues" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-[#1A5DBB] transition-colors"
                >
                  Report Issues
                </Link>
              </li>
              <li>
                <Link 
                  href="mailto:hola@addocu.com"
                  className="text-sm text-gray-600 hover:text-[#1A5DBB] transition-colors"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/privacy" 
                  className="text-sm text-gray-600 hover:text-[#1A5DBB] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms" 
                  className="text-sm text-gray-600 hover:text-[#1A5DBB] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link 
                  href="/license" 
                  className="text-sm text-gray-600 hover:text-[#1A5DBB] transition-colors"
                >
                  Open Source License
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-500">
              © 2025 Addocu. Released under CC BY-NC-SA 4.0 License.
            </div>
            <div className="text-sm text-gray-500 text-center md:text-right">
              Not affiliated with Google LLC.<br />
              Google Analytics, Google Tag Manager, Looker Studio are trademarks of Google LLC.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
