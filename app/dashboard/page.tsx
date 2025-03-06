'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
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
  const router = useRouter();
  
  useEffect(() => {
    // Redirect to the data quality dashboard
    router.push('/dashboard/data-quality');
  }, [router]);
  
  // Return a loading state while redirecting
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Loading dashboard...</h1>
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
      </div>
    </div>
  );
} 