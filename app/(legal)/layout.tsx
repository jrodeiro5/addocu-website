import { Footer } from '@/components/footer';
import Link from 'next/link';

function AddocuLogo() {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-gradient-to-br from-[#1A5DBB] to-[#00AEEF] rounded-lg flex items-center justify-center">
        <div className="w-5 h-5 border-2 border-white rounded-sm"></div>
      </div>
      <span className="text-xl font-semibold text-gray-900">Addocu</span>
    </div>
  );
}

function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
          <AddocuLogo />
        </Link>
        <Link 
          href="/"
          className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </header>
  );
}

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {children}
        </div>
      </main>
      <Footer />
    </section>
  );
}
