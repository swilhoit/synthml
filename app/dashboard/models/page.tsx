import Link from 'next/link';
import Image from 'next/image';

// Badge component for model status
function StatusBadge({ status }: { status: 'active' | 'training' | 'draft' | 'archived' }) {
  const statusClasses = {
    active: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
    training: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
    draft: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
    archived: 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400',
  };

  return (
    <span className={`px-2 py-1 rounded-full text-xs ${statusClasses[status]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}

// Model type badge component
function TypeBadge({ type }: { type: 'tabular' | 'time-series' | 'text' | 'image' }) {
  const typeClasses = {
    tabular: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400',
    'time-series': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400',
    text: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
    image: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400',
  };

  const typeLabels = {
    tabular: 'Tabular',
    'time-series': 'Time-series',
    text: 'Text',
    image: 'Image',
  };

  return (
    <span className={`px-2 py-1 rounded-full text-xs ${typeClasses[type]}`}>
      {typeLabels[type]}
    </span>
  );
}

// Model card component
function ModelCard({ 
  id, 
  name, 
  description, 
  type, 
  status, 
  accuracy, 
  privacy, 
  lastUpdated, 
  dataSources 
}: { 
  id: number; 
  name: string; 
  description: string; 
  type: 'tabular' | 'time-series' | 'text' | 'image'; 
  status: 'active' | 'training' | 'draft' | 'archived'; 
  accuracy: number; 
  privacy: number; 
  lastUpdated: string; 
  dataSources: string[];
}) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 hover:shadow-md transition-shadow font-mono">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <StatusBadge status={status} />
          <TypeBadge type={type} />
        </div>
        <div className="flex items-center space-x-1">
          <button className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </button>
          <button className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
      
      <h3 className="text-lg font-bold mb-2">{name}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{description}</p>
      
      <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4">
        <div>
          <p className="text-xs text-gray-500 dark:text-gray-400">Accuracy</p>
          <div className="mt-1 flex items-center">
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                className="bg-green-600 dark:bg-green-500 h-2 rounded-full" 
                style={{ width: `${accuracy}%` }}
              ></div>
            </div>
            <span className="ml-2 text-xs font-medium text-gray-600 dark:text-gray-300">{accuracy}%</span>
          </div>
        </div>
        <div>
          <p className="text-xs text-gray-500 dark:text-gray-400">Privacy Score</p>
          <div className="mt-1 flex items-center">
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full" 
                style={{ width: `${privacy}%` }}
              ></div>
            </div>
            <span className="ml-2 text-xs font-medium text-gray-600 dark:text-gray-300">{privacy}%</span>
          </div>
        </div>
      </div>
      
      <div className="text-xs text-gray-500 dark:text-gray-400 mb-4">
        <p>Data Sources: {dataSources.join(', ')}</p>
        <p>Last updated: {lastUpdated}</p>
      </div>
      
      <div className="flex justify-between">
        <Link 
          href={`/dashboard/models/${id}`} 
          className="text-indigo-600 dark:text-indigo-400 text-sm hover:underline"
        >
          View details
        </Link>
        <Link 
          href={`/dashboard/monitoring/new-job?modelId=${id}`} 
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded text-sm transition"
        >
          Generate Data
        </Link>
      </div>
    </div>
  );
}

export default function Models() {
  // Dummy data for models
  const models = [
    {
      id: 1,
      name: 'TabGAN Finance',
      description: 'Generative adversarial network for financial transaction data with privacy preservation.',
      type: 'tabular' as const,
      status: 'active' as const,
      accuracy: 94,
      privacy: 90,
      lastUpdated: '2 days ago',
      dataSources: ['Customer Database', 'Transaction Records'],
    },
    {
      id: 2,
      name: 'TimeVAE Sensor',
      description: 'Variational autoencoder optimized for time-series data from IoT sensors and devices.',
      type: 'time-series' as const,
      status: 'training' as const,
      accuracy: 87,
      privacy: 85,
      lastUpdated: '12 hours ago',
      dataSources: ['Manufacturing Sensors'],
    },
    {
      id: 3,
      name: 'CTGAN Healthcare',
      description: 'Conditional tabular GAN for synthetic electronic health records with HIPAA compliance.',
      type: 'tabular' as const,
      status: 'active' as const,
      accuracy: 91,
      privacy: 97,
      lastUpdated: '1 week ago',
      dataSources: ['Patient Records', 'Clinical Data'],
    },
    {
      id: 4,
      name: 'GPT Review Generator',
      description: 'Language model fine-tuned for generating realistic product reviews and customer feedback.',
      type: 'text' as const,
      status: 'draft' as const,
      accuracy: 82,
      privacy: 78,
      lastUpdated: '1 month ago',
      dataSources: ['Product Reviews'],
    },
    {
      id: 5,
      name: 'Diffusion Imaging',
      description: 'Diffusion model for synthetic medical imaging with privacy guarantees and clinical accuracy.',
      type: 'image' as const,
      status: 'archived' as const,
      accuracy: 89,
      privacy: 93,
      lastUpdated: '3 months ago',
      dataSources: ['Imaging Database'],
    },
    {
      id: 6,
      name: 'WGAN Customer Behavior',
      description: 'Wasserstein GAN for generating realistic customer behavior patterns and purchase history.',
      type: 'tabular' as const,
      status: 'active' as const,
      accuracy: 92,
      privacy: 88,
      lastUpdated: '3 days ago',
      dataSources: ['Customer Database', 'Marketing Data'],
    },
  ];

  // Group models by type
  const tabularModels = models.filter(m => m.type === 'tabular');
  const timeSeriesModels = models.filter(m => m.type === 'time-series');
  const textAndImageModels = models.filter(m => m.type === 'text' || m.type === 'image');

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold font-mono">Synthetic Models</h1>
          <p className="mt-1 text-gray-600 dark:text-gray-300 font-mono">
            Configure and manage your synthetic data generation models.
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-2">
          <Link 
            href="/dashboard/models/library" 
            className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-md text-sm font-medium transition font-mono"
          >
            Model Library
          </Link>
          <Link 
            href="/dashboard/models/new" 
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium transition font-mono"
          >
            Create New Model
          </Link>
        </div>
      </div>

      {/* Quick filters */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 font-mono">
        <div className="flex flex-wrap gap-2">
          <button className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400 px-3 py-1 rounded-full text-sm hover:bg-indigo-200 dark:hover:bg-indigo-900/50 transition">
            All Models
          </button>
          <button className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 px-3 py-1 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition">
            Active
          </button>
          <button className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 px-3 py-1 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition">
            Training
          </button>
          <button className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 px-3 py-1 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition">
            Tabular
          </button>
          <button className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 px-3 py-1 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition">
            Time-series
          </button>
          <button className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 px-3 py-1 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition">
            High Privacy
          </button>
        </div>
        <div className="mt-3 flex">
          <div className="relative flex-grow">
            <input 
              type="text" 
              placeholder="Search models..." 
              className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-600 focus:border-transparent"
            />
            <div className="absolute left-3 top-2.5 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <button className="ml-2 px-3 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      {/* Tabular Models */}
      <div>
        <h2 className="text-xl font-semibold mb-4 font-mono">Tabular Data Models</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tabularModels.map(model => (
            <ModelCard 
              key={model.id}
              id={model.id}
              name={model.name}
              description={model.description}
              type={model.type}
              status={model.status}
              accuracy={model.accuracy}
              privacy={model.privacy}
              lastUpdated={model.lastUpdated}
              dataSources={model.dataSources}
            />
          ))}
        </div>
      </div>

      {/* Time-series Models */}
      <div>
        <h2 className="text-xl font-semibold mb-4 font-mono">Time-series Models</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {timeSeriesModels.map(model => (
            <ModelCard 
              key={model.id}
              id={model.id}
              name={model.name}
              description={model.description}
              type={model.type}
              status={model.status}
              accuracy={model.accuracy}
              privacy={model.privacy}
              lastUpdated={model.lastUpdated}
              dataSources={model.dataSources}
            />
          ))}
        </div>
      </div>

      {/* Text and Image Models */}
      <div>
        <h2 className="text-xl font-semibold mb-4 font-mono">Text & Image Models</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {textAndImageModels.map(model => (
            <ModelCard 
              key={model.id}
              id={model.id}
              name={model.name}
              description={model.description}
              type={model.type}
              status={model.status}
              accuracy={model.accuracy}
              privacy={model.privacy}
              lastUpdated={model.lastUpdated}
              dataSources={model.dataSources}
            />
          ))}
        </div>
      </div>

      {/* Feature highlight */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow p-6 text-white font-mono">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-4 md:mb-0 md:mr-8">
            <h3 className="text-xl font-bold mb-2">Model Marketplace Coming Soon</h3>
            <p className="opacity-90 mb-4">
              Browse, purchase, and deploy pre-trained synthetic data models from industry leaders. 
              Accelerate your data projects with models that have been validated for quality and privacy.
            </p>
            <button className="bg-white text-indigo-700 hover:bg-gray-100 px-4 py-2 rounded-md text-sm font-medium transition">
              Join Waitlist
            </button>
          </div>
          <div className="flex-shrink-0 w-full md:w-64 h-32 md:h-40 bg-white/10 rounded-lg flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
} 