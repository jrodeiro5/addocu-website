import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[100dvh] bg-gray-50">
      <div className="max-w-md space-y-8 p-4 text-center">
        <div className="flex justify-center">
          {/* Addocu Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-gradient-to-br from-[#1A5DBB] to-[#00AEEF] rounded-lg flex items-center justify-center">
              <div className="w-7 h-7 border-2 border-white rounded-sm"></div>
            </div>
            <span className="text-2xl font-bold text-[#1A5DBB]">Addocu</span>
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
          Page Not Found
        </h1>
        <p className="text-base text-gray-500">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Link
          href="/"
          className="max-w-48 mx-auto flex justify-center py-2 px-4 border border-[#1A5DBB] rounded-full shadow-sm text-sm font-medium text-[#1A5DBB] bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A5DBB] transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
