import Link from 'next/link';
import Image from 'next/image';

// Component for connection type card
function ConnectionTypeCard({ title, description, icon, href }: { title: string; description: string; icon: React.ReactNode; href: string }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-5 hover:shadow-md transition-shadow font-mono">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">{title}</h3>
        <div className="h-12 w-12 rounded-md bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
          {icon}
        </div>
      </div>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{description}</p>
      <div className="mt-4">
        <Link href={href} className="inline-flex items-center text-sm text-indigo-600 dark:text-indigo-400 hover:underline">
          <span>Connect</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

// Status badge component
function StatusBadge({ status }: { status: 'connected' | 'disconnected' | 'error' }) {
  const statusClasses = {
    connected: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
    disconnected: 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400',
    error: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
  };

  const statusLabels = {
    connected: 'Connected',
    disconnected: 'Disconnected',
    error: 'Error',
  };

  return (
    <span className={`px-2 py-1 text-xs rounded-full ${statusClasses[status]}`}>
      {statusLabels[status]}
    </span>
  );
}

export default function DataSources() {
  // Dummy data for connected data sources
  const connectedSources = [
    { id: 1, name: 'Customer Database', type: 'PostgreSQL', tables: 12, lastSync: '2 hours ago', status: 'connected' as const },
    { id: 2, name: 'Transaction Records', type: 'MySQL', tables: 8, lastSync: '1 day ago', status: 'connected' as const },
    { id: 3, name: 'Marketing Data', type: 'Snowflake', tables: 5, lastSync: '3 days ago', status: 'error' as const },
    { id: 4, name: 'Product Catalog', type: 'CSV Upload', tables: 1, lastSync: '1 week ago', status: 'connected' as const },
    { id: 5, name: 'User Analytics', type: 'BigQuery', tables: 3, lastSync: 'Never', status: 'disconnected' as const },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold font-mono">Data Sources</h1>
          <p className="mt-1 text-gray-600 dark:text-gray-300 font-mono">
            Connect and manage your data sources for synthetic data generation.
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <Link 
            href="/dashboard/data-sources/new" 
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium transition font-mono"
          >
            Add New Data Source
          </Link>
        </div>
      </div>

      {/* Connected data sources */}
      <div>
        <h2 className="text-xl font-semibold mb-4 font-mono">Connected Sources</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden font-mono">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-900/50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Name</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Type</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Tables</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Last Synced</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {connectedSources.map((source) => (
                <tr key={source.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{source.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{source.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{source.tables}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{source.lastSync}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge status={source.status} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link href={`/dashboard/data-sources/${source.id}`} className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-300 mr-4">
                      View
                    </Link>
                    <button className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                      Sync
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Connect new data source */}
      <div>
        <h2 className="text-xl font-semibold mb-4 font-mono">Add New Data Source</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ConnectionTypeCard
            title="SQL Database"
            description="Connect to PostgreSQL, MySQL, SQL Server, or other SQL databases."
            href="/dashboard/data-sources/new?type=sql"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
            }
          />
          <ConnectionTypeCard
            title="Cloud Warehouse"
            description="Connect to Snowflake, BigQuery, Redshift, or Azure Synapse."
            href="/dashboard/data-sources/new?type=warehouse"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            }
          />
          <ConnectionTypeCard
            title="File Upload"
            description="Upload CSV, JSON, or Parquet files directly."
            href="/dashboard/data-sources/new?type=file"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            }
          />
          <ConnectionTypeCard
            title="API Connector"
            description="Connect to RESTful APIs or GraphQL endpoints."
            href="/dashboard/data-sources/new?type=api"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
          />
          <ConnectionTypeCard
            title="Streaming Source"
            description="Connect to Kafka, Kinesis, or other streaming platforms."
            href="/dashboard/data-sources/new?type=streaming"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
            }
          />
          <ConnectionTypeCard
            title="Custom Connector"
            description="Build and configure a custom data source connector."
            href="/dashboard/data-sources/new?type=custom"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            }
          />
        </div>
      </div>

      {/* Data source management features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 font-mono">
          <h3 className="text-lg font-medium mb-2">Data Profiling</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Automatically analyze your data sources to understand their structure, relationships, and statistical properties.
          </p>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <li className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Column-level statistics and data type detection</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Automatic identification of primary and foreign keys</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Correlation analysis between columns and tables</span>
            </li>
          </ul>
          <button className="mt-4 inline-flex items-center text-sm text-indigo-600 dark:text-indigo-400 hover:underline">
            <span>Learn more about data profiling</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 font-mono">
          <h3 className="text-lg font-medium mb-2">Data Security & Compliance</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Apply privacy and security controls to protect sensitive information during data synthesis.
          </p>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <li className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Automatic PII detection and masking</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Differential privacy guarantees</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Industry-specific compliance rules (HIPAA, GDPR, etc.)</span>
            </li>
          </ul>
          <button className="mt-4 inline-flex items-center text-sm text-indigo-600 dark:text-indigo-400 hover:underline">
            <span>Learn more about data security</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
} 