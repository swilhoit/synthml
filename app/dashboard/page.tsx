import Link from 'next/link';
import DataQualityChart from '../components/charts/DataQualityChart';
import PrivacyRiskChart from '../components/charts/PrivacyRiskChart';

// Component for metric cards
function MetricCard({ title, value, change, icon }: { title: string; value: string; change: string; icon: React.ReactNode }) {
  const isPositive = !change.includes('-');
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-5 font-mono">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
          <p className="text-2xl font-bold mt-1">{value}</p>
        </div>
        <div className="h-12 w-12 rounded-md bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
          {icon}
        </div>
      </div>
      <div className={`mt-3 text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
        {change} from last month
      </div>
    </div>
  );
}

// Component for recent activity
function ActivityItem({ title, time, status, user }: { title: string; time: string; status: 'completed' | 'running' | 'failed'; user: string }) {
  const statusClasses = {
    completed: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
    running: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
    failed: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
  };

  return (
    <div className="flex items-start py-3 border-b border-gray-200 dark:border-gray-700 last:border-0">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white text-sm font-medium">
        {user.split(' ').map(name => name[0]).join('')}
      </div>
      <div className="ml-3 flex-1">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium">{title}</p>
          <span className="text-xs text-gray-500">{time}</span>
        </div>
        <div className="flex mt-1 items-center">
          <span className={`text-xs px-2 py-1 rounded-full ${statusClasses[status]}`}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
          <span className="ml-2 text-xs text-gray-500">{user}</span>
        </div>
      </div>
    </div>
  );
}

// Component for quick action cards
function QuickActionCard({ title, description, icon, href }: { title: string; description: string; icon: React.ReactNode; href: string }) {
  return (
    <Link href={href} className="bg-white dark:bg-gray-800 rounded-lg shadow p-5 hover:shadow-md transition-shadow group font-mono">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{title}</h3>
        <div className="h-10 w-10 rounded-md bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
          {icon}
        </div>
      </div>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{description}</p>
      <div className="mt-4 flex items-center text-sm text-indigo-600 dark:text-indigo-400">
        <span>Get started</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </div>
    </Link>
  );
}

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Welcome banner */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 font-mono">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Welcome back, Alex</h2>
            <p className="mt-1 text-gray-600 dark:text-gray-300">Here&apos;s what&apos;s happening with your synthetic data projects today.</p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-2">
            <button className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-md text-sm font-medium transition">
              View Reports
            </button>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium transition">
              New Project
            </button>
          </div>
        </div>
      </div>
      
      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard 
          title="Active Data Sources" 
          value="24" 
          change="+3 (14%)" 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
          } 
        />
        <MetricCard 
          title="Synthetic Models" 
          value="18" 
          change="+5 (38%)" 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
          } 
        />
        <MetricCard 
          title="Generation Jobs" 
          value="147" 
          change="-12 (7.5%)" 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          } 
        />
        <MetricCard 
          title="Data Generated" 
          value="1.4B" 
          change="+245M (21%)" 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          } 
        />
      </div>
      
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-8 h-[450px] font-mono">
          <h3 className="text-lg font-medium mb-2">Synthetic Data Quality</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Statistical similarity to source data</p>
          <div className="mt-4 h-[calc(100%-5rem)]">
            <DataQualityChart />
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-8 h-[450px] font-mono">
          <h3 className="text-lg font-medium mb-2">Privacy Risk Assessment</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Differential privacy guarantees</p>
          <div className="mt-4 h-[calc(100%-5rem)]">
            <PrivacyRiskChart />
          </div>
        </div>
      </div>
      
      {/* Quick actions and recent activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick actions */}
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-lg font-medium font-mono">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <QuickActionCard 
              title="Connect Data Source" 
              description="Connect to databases, warehouses, or upload files to begin analysis."
              href="/dashboard/data-sources/new"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              }
            />
            <QuickActionCard 
              title="Create Synthetic Model" 
              description="Configure a new model to generate synthetic data from your sources."
              href="/dashboard/models/new"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              }
            />
            <QuickActionCard 
              title="Start Generation Job" 
              description="Run a generation job using existing models and data sources."
              href="/dashboard/monitoring/new-job"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            />
            <QuickActionCard 
              title="Configure Export" 
              description="Set up export formats and destinations for your synthetic data."
              href="/dashboard/exports/new"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                </svg>
              }
            />
          </div>
        </div>
        
        {/* Recent activity */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-5 font-mono">
          <h3 className="text-lg font-medium mb-4">Recent Activity</h3>
          <div className="space-y-0">
            <ActivityItem 
              title="Financial Transaction Model Generation" 
              time="10 min ago" 
              status="running"
              user="Alex Smith"
            />
            <ActivityItem 
              title="Customer Data Source Connection" 
              time="1 hour ago" 
              status="completed"
              user="Maya Johnson"
            />
            <ActivityItem 
              title="Healthcare Records Export" 
              time="2 hours ago" 
              status="completed"
              user="Sam Davis"
            />
            <ActivityItem 
              title="Retail Analytics Model Training" 
              time="Yesterday" 
              status="failed"
              user="Taylor Wilson"
            />
            <ActivityItem 
              title="Manufacturing Sensor Data Import" 
              time="2 days ago" 
              status="completed"
              user="Alex Smith"
            />
          </div>
          <div className="mt-4 text-center">
            <a href="#" className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline">View all activity</a>
          </div>
        </div>
      </div>
      
      {/* Recent projects */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium font-mono">Recent Projects</h3>
          <Link href="/dashboard/projects" className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline font-mono">
            View all
          </Link>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden font-mono">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-900/50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Project</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Data type</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Model</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Last updated</th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {[
                { id: 1, name: 'Financial Transaction Analysis', dataType: 'Tabular', model: 'TabGAN', status: 'Active', updated: '2 hours ago' },
                { id: 2, name: 'Customer Behavior Patterns', dataType: 'Time-series', model: 'TimeVAE', status: 'Active', updated: '1 day ago' },
                { id: 3, name: 'Patient Records Synthesis', dataType: 'Tabular', model: 'CTGAN', status: 'Completed', updated: '3 days ago' },
                { id: 4, name: 'Sensor Data Generation', dataType: 'Time-series', model: 'Diffusion', status: 'Active', updated: '5 days ago' },
                { id: 5, name: 'Product Review Synthesis', dataType: 'Text', model: 'GPT', status: 'Paused', updated: '1 week ago' },
              ].map((project) => (
                <tr key={project.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{project.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{project.dataType}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{project.model}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${project.status === 'Active' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 
                      project.status === 'Completed' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
                      'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'}`}>
                      {project.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{project.updated}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link href={`/dashboard/projects/${project.id}`} className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-300">
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 