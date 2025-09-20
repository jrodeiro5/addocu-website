import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Terminal } from './terminal';
import { realCustomerLogos } from '@/components/marketing/real-logo-data';
import { OptimizedLogoCarousel } from '@/components/marketing/optimized-logo-carousel';
import { GoogleToolsSection } from '@/components/marketing/google-tools-section-final';

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

      {/* Google Tools Section with Real Logos */}
      <GoogleToolsSection />

      {/* Optimized Logo Carousel Section */}
      <OptimizedLogoCarousel
        title="Trusted by digital marketing teams worldwide"
        subtitle="Join hundreds of marketers and agencies who save hours every month with automated Google stack auditing"
        logos={realCustomerLogos}
        speed={45}
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
