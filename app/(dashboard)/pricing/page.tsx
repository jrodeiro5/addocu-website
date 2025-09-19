import { checkoutAction } from '@/lib/payments/actions';
import { Check } from 'lucide-react';
import { getStripePrices, getStripeProducts } from '@/lib/payments/stripe';
import { SubmitButton } from './submit-button';

// Force dynamic rendering to avoid build-time API calls
export const dynamic = 'force-dynamic';

// Fallback data for when Stripe is unavailable
const fallbackProducts = [
  { id: 'free', name: 'Free' },
  { id: 'pro', name: 'Pro (Coming Soon)' }
];

const fallbackPrices = [
  { id: 'price_free', productId: 'free', unitAmount: 0, interval: 'forever', trialPeriodDays: 0 },
  { id: 'price_pro', productId: 'pro', unitAmount: 1500, interval: 'month', trialPeriodDays: 14 }
];

export default async function PricingPage() {
  let prices, products;
  
  try {
    // Try to get real data from Stripe
    [prices, products] = await Promise.all([
      getStripePrices(),
      getStripeProducts(),
    ]);
  } catch (error) {
    // Fallback to mock data if Stripe is unavailable
    console.warn('Stripe unavailable, using fallback pricing data');
    prices = fallbackPrices;
    products = fallbackProducts;
  }

  const freePlan = products.find((product) => product.name === 'Free') || fallbackProducts[0];
  const proPlan = products.find((product) => product.name === 'Pro (Coming Soon)') || fallbackProducts[1];

  const freePrice = prices.find((price) => price.productId === freePlan?.id) || fallbackPrices[0];
  const proPrice = prices.find((price) => price.productId === proPlan?.id) || fallbackPrices[1];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Simple, Transparent Pricing
        </h1>
        <p className="text-xl text-gray-600 mt-4">
          Start with our free, open-source Google Sheets Add-on
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <PricingCard
          name={freePlan?.name || 'Free'}
          price={freePrice?.unitAmount || 0}
          interval={freePrice?.interval || 'forever'}
          trialDays={freePrice?.trialPeriodDays || 0}
          isPopular={true}
          features={[
            'Complete GA4 Audit',
            'GTM Deep Dive Analysis',
            'Looker Studio Census',
            'Interactive Dashboard',
            'Open Source & Community Support',
            'All Core Features Included'
          ]}
          priceId={freePrice?.id}
          buttonText="Install Free Add-on"
          buttonUrl="https://workspace.google.com/marketplace"
        />
        <PricingCard
          name={proPlan?.name || 'Pro (Coming Soon)'}
          price={proPrice?.unitAmount || 1500}
          interval={proPrice?.interval || 'month'}
          trialDays={proPrice?.trialPeriodDays || 14}
          isPopular={false}
          features={[
            'Everything in Free, plus:',
            'Automated Scheduling',
            'AI-Powered Analysis',
            'Advanced Integrations',
            'Smart Monitoring & Alerts',
            'Priority Support & Training'
          ]}
          priceId={proPrice?.id}
          buttonText="Coming Soon"
          buttonUrl="#"
          disabled={true}
        />
      </div>
      
      <div className="text-center mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Building in Public
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Addocu was born from countless hours spent on manual documentation. 
          We're building the best auditing tool possible with and for the digital marketing community.
        </p>
        <div className="mt-8">
          <a 
            href="https://github.com/jrodeiro5/addocu" 
            target="_blank"
            className="text-lg font-medium hover:underline"
            style={{ color: '#1A5DBB' }}
          >
            ⭐ Star us on GitHub
          </a>
        </div>
      </div>
    </main>
  );
}

function PricingCard({
  name,
  price,
  interval,
  trialDays,
  features,
  priceId,
  isPopular = false,
  buttonText = "Get Started",
  buttonUrl,
  disabled = false
}: {
  name: string;
  price: number;
  interval: string;
  trialDays: number;
  features: string[];
  priceId?: string;
  isPopular?: boolean;
  buttonText?: string;
  buttonUrl?: string;
  disabled?: boolean;
}) {
  return (
    <div className={`relative pt-6 ${isPopular ? 'ring-2 ring-opacity-60 rounded-lg' : ''}`} 
         style={isPopular ? { ringColor: '#1A5DBB' } : {}}>
      {isPopular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="inline-flex px-4 py-1 rounded-full text-sm font-medium text-white" 
                style={{ backgroundColor: '#1A5DBB' }}>
            Most Popular
          </span>
        </div>
      )}
      
      <div className="p-6">
        <h2 className="text-2xl font-medium text-gray-900 mb-2">{name}</h2>
        {trialDays > 0 && (
          <p className="text-sm text-gray-600 mb-4">
            with {trialDays} day free trial
          </p>
        )}
        <p className="text-4xl font-medium text-gray-900 mb-6">
          {price === 0 ? 'Free' : `$${price / 100}`}
          {price > 0 && (
            <span className="text-xl font-normal text-gray-600">
              {interval === 'forever' ? '' : ` / ${interval}`}
            </span>
          )}
        </p>
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" style={{ color: '#4CAF50' }} />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        
        {buttonUrl ? (
          <a href={buttonUrl} target="_blank" className="block">
            <button
              className={`w-full py-3 px-4 rounded-full text-sm font-medium transition-colors ${
                disabled 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : isPopular 
                    ? 'text-white hover:opacity-90' 
                    : 'border-2 hover:bg-gray-50'
              }`}
              style={
                disabled 
                  ? {} 
                  : isPopular 
                    ? { backgroundColor: '#1A5DBB' }
                    : { borderColor: '#1A5DBB', color: '#1A5DBB' }
              }
              disabled={disabled}
            >
              {buttonText}
            </button>
          </a>
        ) : (
          <form action={checkoutAction}>
            <input type="hidden" name="priceId" value={priceId} />
            <SubmitButton />
          </form>
        )}
      </div>
    </div>
  );
}
