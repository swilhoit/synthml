'use client';

import Link from 'next/link';
import Image from 'next/image';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';

// Status badge component
function StatusBadge({ status }: { status: 'completed' | 'running' | 'failed' | 'queued' | 'canceled' }) {
  const statusClasses = {
    completed: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
    running: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
    failed: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
    queued: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
    canceled: 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400',
  };

  return (
    <span className={`px-2 py-1 rounded-full text-xs ${statusClasses[status]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}

// Progress indicator component
function ProgressIndicator({ percentage }: { percentage: number }) {
  return (
    <div className="flex items-center">
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-2">
        <div 
          className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <span className="text-xs text-gray-600 dark:text-gray-300 min-w-[40px]">{percentage}%</span>
    </div>
  );
}

// Metric card component
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
        {change}
      </div>
    </div>
  );
}

// Chart placeholder component (in real app, you'd use a charting library)
function ChartPlaceholder({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-5 h-64 font-mono">
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>
      <div className="mt-4 h-[calc(100%-3.5rem)] flex items-center justify-center bg-gray-50 dark:bg-gray-900/50 rounded border border-gray-200 dark:border-gray-700">
        <div className="text-center text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
          </svg>
          <p className="mt-2">{title} chart</p>
        </div>
      </div>
    </div>
  );
}

// Resource usage data
const resourceData = [
  { time: '00:00', cpu: 45, memory: 32, storage: 57 },
  { time: '01:00', cpu: 52, memory: 38, storage: 57 },
  { time: '02:00', cpu: 48, memory: 35, storage: 58 },
  { time: '03:00', cpu: 42, memory: 30, storage: 58 },
  { time: '04:00', cpu: 38, memory: 28, storage: 59 },
  { time: '05:00', cpu: 35, memory: 25, storage: 59 },
  { time: '06:00', cpu: 40, memory: 30, storage: 60 },
  { time: '07:00', cpu: 58, memory: 42, storage: 61 },
  { time: '08:00', cpu: 72, memory: 53, storage: 62 },
  { time: '09:00', cpu: 85, memory: 65, storage: 63 },
  { time: '10:00', cpu: 78, memory: 60, storage: 64 },
  { time: '11:00', cpu: 82, memory: 63, storage: 65 },
  { time: '12:00', cpu: 75, memory: 58, storage: 66 },
  { time: '13:00', cpu: 80, memory: 62, storage: 67 },
  { time: '14:00', cpu: 85, memory: 65, storage: 68 },
  { time: '15:00', cpu: 90, memory: 70, storage: 69 },
  { time: '16:00', cpu: 88, memory: 68, storage: 70 },
  { time: '17:00', cpu: 85, memory: 65, storage: 71 },
  { time: '18:00', cpu: 80, memory: 60, storage: 72 },
  { time: '19:00', cpu: 75, memory: 55, storage: 73 },
  { time: '20:00', cpu: 70, memory: 50, storage: 74 },
  { time: '21:00', cpu: 65, memory: 48, storage: 75 },
  { time: '22:00', cpu: 60, memory: 45, storage: 76 },
  { time: '23:00', cpu: 55, memory: 40, storage: 77 },
];

// Component for usage bars
function UsageBar({ title, current, max, unit, color }: { title: string; current: number; max: number; unit: string; color: string }) {
  const percentage = (current / max) * 100;
  const bgColorClass = percentage > 90 
    ? 'bg-red-500 dark:bg-red-600' 
    : percentage > 70 
      ? 'bg-yellow-500 dark:bg-yellow-600' 
      : 'bg-green-500 dark:bg-green-600';

  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="text-sm font-medium">{title}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{current} / {max} {unit}</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div className={`h-2.5 rounded-full ${bgColorClass}`} style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
}

// Function component for chart
function ResourceUsageChart() {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-gray-800 p-3 border border-gray-200 dark:border-gray-700 shadow-lg rounded">
          <p className="font-medium text-sm">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p 
              key={`item-${index}`} 
              className="text-xs" 
              style={{ color: entry.color }}
            >
              {`${entry.name}: ${entry.value}%`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={resourceData}
        margin={{
          top: 5,
          right: 30,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
        <XAxis 
          dataKey="time" 
          tick={{ fontSize: 12 }} 
          tickFormatter={(value) => value.split(':')[0]} 
          interval={3}
        />
        <YAxis 
          tick={{ fontSize: 12 }} 
          domain={[0, 100]}
          tickFormatter={(value) => `${value}%`}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line 
          type="monotone" 
          dataKey="cpu" 
          stroke="#3B82F6" 
          strokeWidth={2} 
          activeDot={{ r: 6 }} 
          name="CPU"
        />
        <Line 
          type="monotone" 
          dataKey="memory" 
          stroke="#10B981" 
          strokeWidth={2} 
          name="Memory"
        />
        <Line 
          type="monotone" 
          dataKey="storage" 
          stroke="#F59E0B" 
          strokeWidth={2} 
          name="Storage"
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default function Monitoring() {
  // Dummy data for active jobs
  const activeJobs = [
    { 
      id: 'JOB-1234', 
      name: 'Financial Transactions Generation',
      model: 'TabGAN Finance',
      status: 'running' as const,
      progress: 68, 
      startTime: '2 hours ago',
      endTime: '~40 min remaining',
      user: 'Alex Smith',
      rowsGenerated: '3.2M / 5M',
    },
    { 
      id: 'JOB-1235', 
      name: 'Customer Behavior Simulation', 
      model: 'WGAN Customer Behavior',
      status: 'queued' as const,
      progress: 0, 
      startTime: 'Queued 30 min ago',
      endTime: 'Waiting to start',
      user: 'Maya Johnson',
      rowsGenerated: '0 / 10M',
    },
    { 
      id: 'JOB-1236', 
      name: 'Product Review Text Generation', 
      model: 'GPT Review Generator',
      status: 'running' as const,
      progress: 23, 
      startTime: '45 min ago',
      endTime: '~2 hours remaining',
      user: 'Sam Davis',
      rowsGenerated: '12K / 50K',
    },
  ];

  // Dummy data for completed jobs
  const completedJobs = [
    { 
      id: 'JOB-1228', 
      name: 'Patient Records Synthesis', 
      model: 'CTGAN Healthcare',
      status: 'completed' as const,
      startTime: 'Yesterday, 3:42 PM',
      endTime: 'Yesterday, 5:17 PM',
      duration: '1h 35m',
      user: 'Taylor Wilson',
      rowsGenerated: '2.5M',
      dataSizeGB: '4.3',
    },
    { 
      id: 'JOB-1229', 
      name: 'Sensor Data Time Series', 
      model: 'TimeVAE Sensor',
      status: 'completed' as const,
      startTime: 'Yesterday, 10:15 AM',
      endTime: 'Yesterday, 11:30 AM',
      duration: '1h 15m',
      user: 'Alex Smith',
      rowsGenerated: '1.8M',
      dataSizeGB: '2.7',
    },
    { 
      id: 'JOB-1230', 
      name: 'Marketing Campaign Data', 
      model: 'TabGAN Finance',
      status: 'failed' as const,
      startTime: '2 days ago, 2:20 PM',
      endTime: '2 days ago, 2:35 PM',
      duration: '15m',
      user: 'Maya Johnson',
      rowsGenerated: '120K',
      dataSizeGB: '0.2',
    },
    { 
      id: 'JOB-1231', 
      name: 'Medical Imaging Synthesis', 
      model: 'Diffusion Imaging',
      status: 'canceled' as const,
      startTime: '3 days ago, 9:10 AM',
      endTime: '3 days ago, 9:25 AM',
      duration: '15m',
      user: 'Sam Davis',
      rowsGenerated: '250',
      dataSizeGB: '1.1',
    },
    { 
      id: 'JOB-1232', 
      name: 'Customer Churn Prediction Data', 
      model: 'WGAN Customer Behavior',
      status: 'completed' as const,
      startTime: '4 days ago, 11:05 AM',
      endTime: '4 days ago, 12:30 PM',
      duration: '1h 25m',
      user: 'Taylor Wilson',
      rowsGenerated: '3.2M',
      dataSizeGB: '5.1',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold font-mono">Monitoring & Jobs</h1>
          <p className="mt-1 text-gray-600 dark:text-gray-300 font-mono">
            Track your synthetic data generation jobs and monitor model performance.
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <Link 
            href="/dashboard/monitoring/new-job" 
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium transition font-mono"
          >
            Start New Job
          </Link>
        </div>
      </div>
      
      {/* Overview metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard 
          title="Active Jobs" 
          value="3" 
          change="+1 from yesterday" 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          } 
        />
        <MetricCard 
          title="Jobs Completed Today" 
          value="12" 
          change="+4 from yesterday" 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          } 
        />
        <MetricCard 
          title="Records Generated (24h)" 
          value="15.7M" 
          change="+2.3M from yesterday" 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          } 
        />
        <MetricCard 
          title="Avg. Job Duration" 
          value="1h 12m" 
          change="-8m from yesterday" 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          } 
        />
      </div>
      
      {/* Performance charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ChartPlaceholder 
          title="Jobs by Status (Last 30 days)" 
          subtitle="Distribution of job statuses over time" 
        />
        <ChartPlaceholder 
          title="Data Generation Volume" 
          subtitle="Records generated per day" 
        />
      </div>
      
      {/* Active jobs */}
      <div>
        <h2 className="text-xl font-semibold mb-4 font-mono">Active Jobs</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden font-mono">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-900/50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Job ID / Name</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Model</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Progress</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Time</th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {activeJobs.map((job) => (
                <tr key={job.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">{job.name}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{job.id} • {job.user}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{job.model}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge status={job.status} />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <ProgressIndicator percentage={job.progress} />
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{job.rowsGenerated}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col text-sm text-gray-500 dark:text-gray-400">
                      <div>Started: {job.startTime}</div>
                      <div>{job.endTime}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link href={`/dashboard/monitoring/jobs/${job.id}`} className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-300 mr-4">
                      Details
                    </Link>
                    {job.status === 'running' && (
                      <button className="text-red-600 dark:text-red-400 hover:text-red-900 dark:hover:text-red-300">
                        Cancel
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Completed jobs */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold font-mono">Recent Jobs</h2>
          <Link href="/dashboard/monitoring/history" className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline">
            View all jobs
          </Link>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden font-mono">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-900/50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Job ID / Name</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Model</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Duration</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Data Generated</th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {completedJobs.map((job) => (
                <tr key={job.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">{job.name}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{job.id} • {job.user}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{job.model}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge status={job.status} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{job.duration}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {job.rowsGenerated} rows
                      <span className="text-xs ml-1">({job.dataSizeGB} GB)</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link href={`/dashboard/monitoring/jobs/${job.id}`} className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-300 mr-3">
                      Details
                    </Link>
                    {job.status === 'completed' && (
                      <Link href={`/dashboard/exports?jobId=${job.id}`} className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-300">
                        Export
                      </Link>
                    )}
                    {job.status === 'failed' && (
                      <button className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-300">
                        Retry
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Resource usage */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-8">
        <h2 className="text-lg font-medium mb-6">Resource Usage</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 h-80">
            <ResourceUsageChart />
          </div>
          <div className="space-y-8">
            <UsageBar title="CPU Usage" current={85} max={100} unit="%" color="blue" />
            <UsageBar title="Memory Usage" current={65} max={100} unit="%" color="green" />
            <UsageBar title="Storage Usage" current={77} max={100} unit="%" color="yellow" />
            <UsageBar title="Job Queue" current={12} max={20} unit="jobs" color="indigo" />
          </div>
        </div>
      </div>
      
      {/* Usage limits & quotas */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 font-mono">
        <h2 className="text-lg font-semibold mb-3">Usage & Quotas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Monthly Data Generation</p>
            <div className="flex items-center">
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
                <div 
                  className="bg-indigo-600 dark:bg-indigo-500 h-4 rounded-full" 
                  style={{ width: '68%' }}
                ></div>
              </div>
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-xs text-gray-500 dark:text-gray-400">68% used</span>
              <span className="text-xs text-gray-600 dark:text-gray-300">342M / 500M records</span>
            </div>
          </div>
          
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Concurrent Jobs</p>
            <div className="flex items-center">
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
                <div 
                  className="bg-indigo-600 dark:bg-indigo-500 h-4 rounded-full" 
                  style={{ width: '30%' }}
                ></div>
              </div>
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-xs text-gray-500 dark:text-gray-400">30% used</span>
              <span className="text-xs text-gray-600 dark:text-gray-300">3 / 10 jobs</span>
            </div>
          </div>
          
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Storage Usage</p>
            <div className="flex items-center">
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
                <div 
                  className="bg-indigo-600 dark:bg-indigo-500 h-4 rounded-full" 
                  style={{ width: '42%' }}
                ></div>
              </div>
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-xs text-gray-500 dark:text-gray-400">42% used</span>
              <span className="text-xs text-gray-600 dark:text-gray-300">211 GB / 500 GB</span>
            </div>
          </div>
        </div>
        
        <div className="mt-4 text-center">
          <Link 
            href="/dashboard/billing" 
            className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            View usage details or upgrade plan
          </Link>
        </div>
      </div>
    </div>
  );
} 