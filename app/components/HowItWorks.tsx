import Image from 'next/image';

const steps = [
  {
    number: '01',
    title: 'Connect Your Data Source',
    description: 'Securely connect your data source to our platform. We support databases, CSV files, APIs, and more.',
  },
  {
    number: '02',
    title: 'Configure Generation Parameters',
    description: 'Set up your data generation parameters, including privacy settings, constraints, and desired output formats.',
  },
  {
    number: '03',
    title: 'Generate Synthetic Data',
    description: 'Our advanced AI models generate high-quality synthetic data that maintains the statistical properties of your original dataset.',
  },
  {
    number: '04',
    title: 'Validate & Export',
    description: 'Validate the quality of your synthetic data and export it in your preferred format for immediate use in your ML pipelines.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white font-mono">
            How SynthML Works
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-mono">
            A simple four-step process to generate high-quality synthetic data for your machine learning needs.
          </p>
        </div>
        
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-0 w-full h-0.5 bg-indigo-100 dark:bg-indigo-900"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xl font-bold z-10 font-mono">
                    {index + 1}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white text-center font-mono">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300 text-center font-mono">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 md:mt-24 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white font-mono">
                Advanced AI Technology
              </h3>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 font-mono">
                Our platform utilizes state-of-the-art generative AI models, including GANs, VAEs, and diffusion models, to produce the highest quality synthetic data.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Privacy-preserving techniques built-in',
                  'Statistical similarity guarantees',
                  'Custom constraints and relationships',
                  'Scalable to billions of data points',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mt-0.5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-200 font-mono">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-64 md:h-auto">
              <div className="absolute inset-0 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full max-w-sm p-4">
                  <div className="h-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="h-2 bg-white dark:bg-gray-800 rounded-full w-full"></div>
                    <div className="h-2 bg-white dark:bg-gray-800 rounded-full w-5/6"></div>
                    <div className="h-2 bg-white dark:bg-gray-800 rounded-full w-4/6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 