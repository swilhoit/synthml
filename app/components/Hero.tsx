import Image from 'next/image';

export default function Hero() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white font-mono">
              <span className="text-indigo-600 dark:text-indigo-400">Synthetic Data</span> for Machine Learning
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-mono">
              Generate high-quality synthetic data to train your ML models faster and more effectively. Protect privacy, reduce bias, and overcome data scarcity challenges.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md transition text-lg font-medium font-mono">
                Get Started Free
              </button>
              <button className="bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 px-6 py-3 rounded-md transition text-lg font-medium flex items-center justify-center font-mono">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Watch Demo
              </button>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800 bg-indigo-${i * 100} dark:bg-indigo-${i * 100 + 200}`} />
                ))}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-mono">
                Trusted by <span className="font-semibold">1,000+</span> data scientists
              </p>
            </div>
          </div>
          <div className="md:col-span-3 relative h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-2xl">
            <Image 
              src="/schema-explorer.png"
              alt="SynthML Data Schema Explorer"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
} 