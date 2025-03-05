import { CheckIcon } from './icons/CheckIcon';

const plans = [
  {
    name: 'Starter',
    price: '$49',
    period: 'per month',
    description: 'Perfect for individuals and small teams getting started with synthetic data.',
    features: [
      'Up to 100,000 synthetic data points/month',
      'Basic privacy preservation',
      'Tabular data generation',
      'Email support',
      'Community access',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Professional',
    price: '$199',
    period: 'per month',
    description: 'For teams and organizations with advanced synthetic data needs.',
    features: [
      'Up to 1M synthetic data points/month',
      'Advanced privacy preservation',
      'Tabular & text data generation',
      'Custom data constraints',
      'API access',
      'Priority email support',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact for pricing',
    description: 'Custom solutions for large organizations with complex data needs.',
    features: [
      'Unlimited synthetic data generation',
      'Multi-modal data generation',
      'On-premise deployment options',
      'Custom model training',
      'Dedicated account manager',
      '24/7 priority support',
      'Custom integrations',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white font-mono">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-mono">
            Choose the plan that's right for your synthetic data needs. All plans include a 14-day free trial.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`
                rounded-2xl p-8 flex flex-col h-full relative
                ${plan.popular 
                  ? 'bg-indigo-600 text-white shadow-xl scale-105 z-10 my-4 md:my-0' 
                  : 'bg-white dark:bg-gray-800 shadow-md'}
              `}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium font-mono">
                  Most Popular
                </div>
              )}
              <h3 className={`text-2xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'} font-mono`}>
                {plan.name}
              </h3>
              <div className="mt-4 flex items-baseline">
                <span className={`text-4xl font-extrabold tracking-tight ${plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'} font-mono`}>
                  {plan.price}
                </span>
                <span className={`ml-1 text-lg ${plan.popular ? 'text-indigo-100' : 'text-gray-500 dark:text-gray-400'} font-mono`}>
                  {plan.period}
                </span>
              </div>
              <p className={`mt-4 ${plan.popular ? 'text-indigo-100' : 'text-gray-600 dark:text-gray-300'} font-mono`}>
                {plan.description}
              </p>
              
              <ul className="mt-6 space-y-4 flex-1">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className={`flex-shrink-0 ${plan.popular ? 'text-indigo-200' : 'text-indigo-500 dark:text-indigo-400'}`}>
                      <CheckIcon className="h-5 w-5" />
                    </div>
                    <span className={`ml-3 ${plan.popular ? 'text-white' : 'text-gray-700 dark:text-gray-300'} font-mono`}>
                      {feature}
                    </span>
                  </li>
                ))}
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 dark:text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-2">Email and chat support during business hours</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <button 
                  className={`w-full py-3 px-4 rounded-lg font-medium transition font-mono ${
                    plan.popular 
                      ? 'bg-white text-indigo-600 hover:bg-gray-100'
                      : 'bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-700'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-mono">
            All plans include basic features like data export, quality validation, and community support.
            <br className="hidden md:inline" /> Need a custom solution? <a href="#contact" className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline">Contact our sales team</a>.
          </p>
        </div>
      </div>
    </section>
  );
} 