import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { 
  BarChart3, 
  FileSpreadsheet, 
  Settings, 
  Shield, 
  Zap, 
  Users,
  ArrowRight,
  Check,
  Github
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Features',
  description: 'Comprehensive Google marketing stack audits with Addocu. GA4, GTM, and Looker Studio documentation automated.',
};

export default function FeaturesPage() {
  return (
    <main className="py-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-6xl">
          Complete Marketing Stack
          <span className="block text-[#1A5DBB]">Audit & Documentation</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Free, open-source Google Sheets Add-on that automates the painful process of 
          documenting your entire Google marketing ecosystem in seconds.
        </p>
      </section>

      {/* Main Features */}
      <section className="py-16 bg-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* GA4 Feature */}
            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-[#1A5DBB] text-white mx-auto">
                <BarChart3 className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                Google Analytics 4 Complete Audit
              </h3>
              <ul className="mt-4 space-y-2 text-gray-600 text-left">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Properties & Data Streams inventory with detailed configuration
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Custom Dimensions & Metrics with scope and parameter names
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Conversion Events configuration and status
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Audiences and Data Retention settings
                </li>
              </ul>
            </div>

            {/* GTM Feature */}
            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-[#4CAF50] text-white mx-auto">
                <Settings className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                Google Tag Manager Deep Dive
              </h3>
              <ul className="mt-4 space-y-2 text-gray-600 text-left">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Container inventory with publication status and versions
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Complete mapping of Tags, Triggers & Variables
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Firing status and trigger conditions analysis
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Multi-workspace support for complex setups
                </li>
              </ul>
            </div>

            {/* Looker Studio Feature */}
            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-[#00AEEF] text-white mx-auto">
                <FileSpreadsheet className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                Looker Studio Census
              </h3>
              <ul className="mt-4 space-y-2 text-gray-600 text-left">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Report inventory with owners and sharing settings
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Data Sources mapping and refresh status
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Usage statistics and data freshness indicators
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Permissions and access control overview
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Addocu?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <Zap className="h-12 w-12 text-[#1A5DBB] mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">
                Generate comprehensive audits in seconds, not hours. 
                One-click automation saves countless manual work.
              </p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-[#1A5DBB] mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Completely Secure</h3>
              <p className="text-gray-600">
                Your data never leaves your Google account. 
                Read-only access with complete transparency.
              </p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-[#1A5DBB] mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Driven</h3>
              <p className="text-gray-600">
                Free forever, open-source, and built by the 
                digital marketing community for the community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Audit Your Marketing Stack?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of digital marketers who have saved countless hours 
            with automated Google stack documentation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://workspace.google.com/marketplace"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-[#1A5DBB] hover:bg-[#1A5DBB]/90 text-white rounded-full">
                Install Free Add-on
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a
              href="https://github.com/jrodeiro5/addocu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="border-[#1A5DBB] text-[#1A5DBB] hover:bg-[#1A5DBB] hover:text-white rounded-full">
                <Github className="mr-2 h-5 w-5" />
                View Source Code
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
