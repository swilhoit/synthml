import Link from 'next/link';
import Image from 'next/image';

// Export type badge component
function TypeBadge({ type }: { type: 'csv' | 'json' | 'parquet' | 'sql' | 'api' | 'custom' }) {
  const typeClasses = {
    csv: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400',
    json: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
    parquet: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400',
    sql: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400',
    api: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400',
    custom: 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400',
  };

  const typeLabels = {
    csv: 'CSV',
    json: 'JSON',
    parquet: 'Parquet',
    sql: 'SQL',
    api: 'API',
    custom: 'Custom',
  };

  return (
    <span className={`px-2 py-1 rounded-full text-xs ${typeClasses[type]}`}>
      {typeLabels[type]}
    </span>
  );
}

// Status badge component
function StatusBadge({ status }: { status: 'completed' | 'running' | 'failed' | 'scheduled' }) {
  const statusClasses = {
    completed: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
    running: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
    failed: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
    scheduled: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
  };

  return (
    <span className={`px-2 py-1 rounded-full text-xs ${statusClasses[status]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}

// Integration card component
function IntegrationCard({ 
  title, 
  description, 
  icon, 
  isConnected = false,
  href
}: { 
  title: string; 
  description: string; 
  icon: React.ReactNode; 
  isConnected?: boolean;
  href: string;
}) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-5 hover:shadow-md transition-shadow font-mono">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <div className="h-12 w-12 rounded-md bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-4">
            {icon}
          </div>
          <h3 className="text-lg font-medium">{title}</h3>
        </div>
        {isConnected ? (
          <span className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 px-2 py-1 rounded-full text-xs">
            Connected
          </span>
        ) : null}
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <Link 
        href={href} 
        className={`inline-flex items-center text-sm ${
          isConnected 
            ? 'text-indigo-600 dark:text-indigo-400 hover:underline' 
            : 'bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded transition'
        }`}
      >
        {isConnected ? (
          <>
            <span>Configure</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </>
        ) : (
          <span>Connect</span>
        )}
      </Link>
    </div>
  );
}

export default function Exports() {
  // Dummy data for recent exports
  const recentExports = [
    { 
      id: 'EXP-1234', 
      name: 'Financial Transactions Export', 
      jobId: 'JOB-1228',
      type: 'csv' as const,
      status: 'completed' as const,
      createdAt: '2 hours ago',
      user: 'Alex Smith',
      size: '2.1 GB',
      records: '2.5M',
    },
    { 
      id: 'EXP-1235', 
      name: 'Customer Behavior Dataset', 
      jobId: 'JOB-1229',
      type: 'parquet' as const,
      status: 'completed' as const,
      createdAt: 'Yesterday',
      user: 'Maya Johnson',
      size: '1.4 GB',
      records: '1.8M',
    },
    { 
      id: 'EXP-1236', 
      name: 'Patient Records JSON', 
      jobId: 'JOB-1228',
      type: 'json' as const,
      status: 'failed' as const,
      createdAt: '3 days ago',
      user: 'Taylor Wilson',
      size: '0',
      records: '0',
    },
    { 
      id: 'EXP-1237', 
      name: 'Marketing Data SQL Dump', 
      jobId: 'JOB-1230',
      type: 'sql' as const,
      status: 'running' as const,
      createdAt: '30 min ago',
      user: 'Sam Davis',
      size: '~1.2 GB',
      records: '120K',
    },
    { 
      id: 'EXP-1238', 
      name: 'Customer Churn API Integration', 
      jobId: 'JOB-1232',
      type: 'api' as const,
      status: 'scheduled' as const,
      createdAt: '10 min ago',
      user: 'Alex Smith',
      size: 'N/A',
      records: '3.2M',
    },
  ];

  const scheduledExports = [
    {
      id: 'SCHED-001',
      name: 'Weekly Financial Data',
      type: 'parquet' as const,
      destination: 'AWS S3',
      frequency: 'Weekly (Mondays at 2 AM)',
      nextRun: 'March 15, 2023',
      lastRun: 'March 8, 2023',
    },
    {
      id: 'SCHED-002',
      name: 'Daily Customer Snapshot',
      type: 'csv' as const,
      destination: 'Google Cloud Storage',
      frequency: 'Daily at 4 AM',
      nextRun: 'Tomorrow at 4:00 AM',
      lastRun: 'Today at 4:00 AM',
    },
    {
      id: 'SCHED-003',
      name: 'Monthly Compliance Report',
      type: 'json' as const,
      destination: 'Azure Blob Storage',
      frequency: 'Monthly (1st day at 1 AM)',
      nextRun: 'April 1, 2023',
      lastRun: 'March 1, 2023',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold font-mono">Exports & Integration</h1>
          <p className="mt-1 text-gray-600 dark:text-gray-300 font-mono">
            Export generated synthetic data and integrate with your systems.
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-2">
          <Link 
            href="/dashboard/exports/scheduled" 
            className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-md text-sm font-medium transition font-mono"
          >
            Scheduled Exports
          </Link>
          <Link 
            href="/dashboard/exports/new" 
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium transition font-mono"
          >
            Create Export
          </Link>
        </div>
      </div>
      
      {/* Recent exports */}
      <div>
        <h2 className="text-xl font-semibold mb-4 font-mono">Recent Exports</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden font-mono">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-900/50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Export Name</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Type</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Records</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Created</th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {recentExports.map((export_) => (
                <tr key={export_.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">{export_.name}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{export_.id} • {export_.user}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <TypeBadge type={export_.type} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge status={export_.status} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {export_.records} <span className="text-xs">({export_.size})</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{export_.createdAt}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    {export_.status === 'completed' && (
                      <>
                        <Link href={`/dashboard/exports/${export_.id}`} className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-300 mr-3">
                          Details
                        </Link>
                        <button className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-300">
                          Download
                        </button>
                      </>
                    )}
                    {export_.status === 'running' && (
                      <button className="text-red-600 dark:text-red-400 hover:text-red-900 dark:hover:text-red-300">
                        Cancel
                      </button>
                    )}
                    {export_.status === 'failed' && (
                      <button className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-300">
                        Retry
                      </button>
                    )}
                    {export_.status === 'scheduled' && (
                      <Link href={`/dashboard/exports/${export_.id}`} className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-300">
                        Details
                      </Link>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Scheduled exports */}
      <div>
        <h2 className="text-xl font-semibold mb-4 font-mono">Scheduled Exports</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden font-mono">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-900/50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Name</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Type</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Destination</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Frequency</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Next Run</th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {scheduledExports.map((schedule) => (
                <tr key={schedule.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{schedule.name}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{schedule.id}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <TypeBadge type={schedule.type} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{schedule.destination}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{schedule.frequency}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{schedule.nextRun}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link href={`/dashboard/exports/scheduled/${schedule.id}`} className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-300 mr-3">
                      Edit
                    </Link>
                    <button className="text-red-600 dark:text-red-400 hover:text-red-900 dark:hover:text-red-300">
                      Disable
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Integrations */}
      <div>
        <h2 className="text-xl font-semibold mb-4 font-mono">Integrations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <IntegrationCard 
            title="AWS S3"
            description="Export data directly to Amazon S3 buckets for storage or further processing."
            href="/dashboard/exports/integration/aws"
            isConnected={true}
            icon={
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4L4 8L12 12L20 8L12 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 12L12 16L20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 16L12 20L20 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
          />
          
          <IntegrationCard 
            title="Google Cloud Storage"
            description="Connect to Google Cloud Storage for seamless data integration with GCP."
            href="/dashboard/exports/integration/gcp"
            isConnected={true}
            icon={
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 18H3C1.89543 18 1 17.1046 1 16V8C1 6.89543 1.89543 6 3 6H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M17 18H21C22.1046 18 23 17.1046 23 16V8C23 6.89543 22.1046 6 21 6H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="7" y="3" width="10" height="18" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
          />
          
          <IntegrationCard 
            title="Azure Blob Storage"
            description="Export your synthetic data to Microsoft Azure Blob Storage."
            href="/dashboard/exports/integration/azure"
            icon={
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 15V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
          />
          
          <IntegrationCard 
            title="Snowflake"
            description="Load synthetic data directly into Snowflake data warehouse tables."
            href="/dashboard/exports/integration/snowflake"
            icon={
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 9L12 12.5L5 9L12 5.5L19 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 12.5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5 9V16L12 19L19 16V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
          />
          
          <IntegrationCard 
            title="Kafka / Event Streams"
            description="Stream synthetic data to Kafka topics for real-time processing."
            href="/dashboard/exports/integration/kafka"
            icon={
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 10H17C19.2091 10 21 8.20914 21 6C21 3.79086 19.2091 2 17 2H13M13 10H7C4.79086 10 3 11.7909 3 14C3 16.2091 4.79086 18 7 18H13M13 10V2M13 10V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
          />
          
          <IntegrationCard 
            title="Custom API Endpoint"
            description="Send data to your custom API endpoints with flexible authentication options."
            href="/dashboard/exports/integration/api"
            isConnected={true}
            icon={
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 13C10 13.5523 9.55228 14 9 14C8.44772 14 8 13.5523 8 13C8 12.4477 8.44772 12 9 12C9.55228 12 10 12.4477 10 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15 13C15 13.5523 14.5523 14 14 14C13.4477 14 13 13.5523 13 13C13 12.4477 13.4477 12 14 12C14.5523 12 15 12.4477 15 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20 7L20 17C20 18.1046 19.1046 19 18 19L6 19C4.89543 19 4 18.1046 4 17L4 7C4 5.89543 4.89543 5 6 5L18 5C19.1046 5 20 5.89543 20 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
          />
        </div>
      </div>
      
      {/* File formats */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 font-mono">
        <h2 className="text-lg font-medium mb-4">Supported Export Formats</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <h3 className="text-base font-medium mb-2">Tabular Data</h3>
            <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>CSV (Comma Separated Values)</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Parquet (columnar storage)</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>JSON (JavaScript Object Notation)</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>SQL (database insert statements)</span>
              </li>
            </ul>
          </div>
          
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <h3 className="text-base font-medium mb-2">Time-series Data</h3>
            <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>CSV with timestamps</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>JSON time-series format</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>InfluxDB line protocol</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Prometheus format</span>
              </li>
            </ul>
          </div>
          
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <h3 className="text-base font-medium mb-2">Text & Image Data</h3>
            <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Plain text files (.txt)</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>JSONL (JSON Lines)</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>PNG/JPEG image formats</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>ZIP archives (for multiple files)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 