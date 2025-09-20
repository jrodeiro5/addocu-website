import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart3, FileSpreadsheet, Settings } from 'lucide-react';
import { Terminal } from './terminal';
import { placeholderLogos } from '@/components/marketing';
import { SimpleLogoCarousel } from '@/components/marketing/simple-logo-carousel';

export default function HomePage() {
  return (
    <main>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-6xl">
                Audit Your Google Stack
                <span className="block text-[#1A5DBB]">In Seconds</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Free and open-source Google Sheets Add-on for digital marketers. 
                Automate the painful process of documenting GA4, GTM, and Looker Studio 
                with detailed metadata pulled directly into your spreadsheet.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <a
                  href="https://workspace.google.com/marketplace"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="text-lg rounded-full border-2 bg-[#1A5DBB] text-white hover:bg-[#1A5DBB]/90 border-[#1A5DBB]"
                  >
                    Install Free Add-on
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <Terminal />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#1A5DBB] text-white">
                <BarChart3 className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  Google Analytics 4 Complete Audit
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Full inventory of GA4 properties, custom dimensions, conversion events, 
                  audiences, and data retention settings with detailed configuration.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#4CAF50] text-white">
                <Settings className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  Google Tag Manager Deep Dive
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Complete mapping of containers, tags, triggers, and variables with 
                  firing status, version comparison, and workspace analysis.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#00AEEF] text-white">
                <FileSpreadsheet className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  Looker Studio Census
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Report inventory with owners, sharing settings, data sources, 
                  refresh status, and usage statistics for complete visibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Carousel Section */}
      <SimpleLogoCarousel
        title="Trusted by digital marketing teams"
        subtitle="Join hundreds of marketers who save hours every month with automated auditing"
        logos={placeholderLogos}
      />

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Ready to audit your Google stack?
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                Born from countless hours spent on manual documentation. 
                Free, open-source, and built for the digital marketing community. 
                Get comprehensive audits in seconds, not hours.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 flex justify-center lg:justify-end">
              <a 
                href="https://github.com/jrodeiro5/addocu" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg rounded-full border-2 border-[#1A5DBB] text-[#1A5DBB] hover:bg-[#1A5DBB] hover:text-white"
                >
                  View on GitHub
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
