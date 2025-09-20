import { LogoCarousel, customerLogos, agencyLogos, placeholderLogos, type LogoItem } from '@/components/marketing';

// Ejemplo 1: Carrusel básico para página principal
export function BasicLogoCarousel() {
  return (
    <LogoCarousel
      title="Trusted by digital marketing teams"
      subtitle="Join hundreds of marketers who save hours every month with automated auditing"
      logos={placeholderLogos}
      speed={35}
    />
  );
}

// Ejemplo 2: Carrusel para página de precios (más enfocado)
export function PricingPageCarousel() {
  return (
    <LogoCarousel
      title="Join the community"
      logos={customerLogos}
      speed={40}
      className="bg-white border-t border-b border-gray-100"
    />
  );
}

// Ejemplo 3: Carrusel para página de características (más técnico)
export function FeaturesPageCarousel() {
  return (
    <LogoCarousel
      title="Powering marketing teams at"
      subtitle="From startups to enterprises, marketers trust Addocu for their auditing needs"
      logos={agencyLogos}
      speed={30}
      className="bg-gradient-to-b from-gray-50 to-white"
    />
  );
}

// Ejemplo 4: Carrusel compacto para footer
export function FooterLogoCarousel() {
  return (
    <div className="py-8">
      <LogoCarousel
        title="Trusted by"
        logos={placeholderLogos.slice(0, 4)} // Solo 4 logos
        speed={25}
        className="py-8 bg-transparent"
      />
    </div>
  );
}

// Ejemplo 5: Carrusel oscuro para sección hero alternativa
export function DarkHeroCarousel() {
  return (
    <LogoCarousel
      title="Trusted by innovative teams"
      logos={customerLogos}
      speed={45}
      className="bg-gray-900 text-white py-12"
    />
  );
}

// Ejemplo 6: Carrusel con métricas para landing page
export function MetricsCarousel() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Join 500+ marketing teams
        </h2>
        <div className="flex justify-center space-x-8 text-sm text-gray-600 mb-8">
          <div>
            <span className="font-semibold text-[#1A5DBB]">2M+</span>
            <br />
            Audits completed
          </div>
          <div>
            <span className="font-semibold text-[#1A5DBB]">500+</span>
            <br />
            Active users
          </div>
          <div>
            <span className="font-semibold text-[#1A5DBB]">10K+</span>
            <br />
            Hours saved
          </div>
        </div>
      </div>
      
      <LogoCarousel
        logos={placeholderLogos}
        speed={35}
        className="py-0 bg-transparent"
      />
    </div>
  );
}
