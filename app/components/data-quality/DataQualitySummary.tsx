import React from 'react';

interface DataQualitySummaryProps {
  datasetName: string;
  qualityScore: number;
  testsCount: {
    total: number;
    passed: number;
    failed: number;
    warning: number;
  };
  lastRun: string;
  columns: number;
  rows: number;
}

export default function DataQualitySummary({
  datasetName,
  qualityScore,
  testsCount,
  lastRun,
  columns,
  rows
}: DataQualitySummaryProps) {
  // Function to determine score color
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-500 dark:text-green-400';
    if (score >= 60) return 'text-yellow-500 dark:text-yellow-400';
    return 'text-red-500 dark:text-red-400';
  };
  
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-5">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">{datasetName}</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Last run: {lastRun}</p>
        </div>
        <div className="text-center">
          <div className={`text-3xl font-bold ${getScoreColor(qualityScore)}`}>
            {qualityScore}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Quality Score</div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="text-center p-3 bg-gray-50 dark:bg-gray-900 rounded">
          <div className="text-xl font-semibold text-gray-800 dark:text-gray-200">{testsCount.total}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">Total Tests</div>
        </div>
        <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded">
          <div className="text-xl font-semibold text-green-600 dark:text-green-400">{testsCount.passed}</div>
          <div className="text-xs text-green-500 dark:text-green-400">Passed</div>
        </div>
        <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded">
          <div className="text-xl font-semibold text-yellow-600 dark:text-yellow-400">{testsCount.warning}</div>
          <div className="text-xs text-yellow-500 dark:text-yellow-400">Warnings</div>
        </div>
        <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded">
          <div className="text-xl font-semibold text-red-600 dark:text-red-400">{testsCount.failed}</div>
          <div className="text-xs text-red-500 dark:text-red-400">Failed</div>
        </div>
      </div>
      
      <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded">
        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Dataset Overview</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="flex items-center">
              <svg className="h-5 w-5 text-gray-400 dark:text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
              </svg>
              <span className="text-sm text-gray-600 dark:text-gray-400">Columns:</span>
              <span className="ml-1 text-sm font-medium text-gray-900 dark:text-white">{columns}</span>
            </div>
            <div className="flex items-center mt-2">
              <svg className="h-5 w-5 text-gray-400 dark:text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span className="text-sm text-gray-600 dark:text-gray-400">Rows:</span>
              <span className="ml-1 text-sm font-medium text-gray-900 dark:text-white">{rows.toLocaleString()}</span>
            </div>
          </div>
          <div>
            <div className="flex items-center">
              <svg className="h-5 w-5 text-gray-400 dark:text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <span className="text-sm text-gray-600 dark:text-gray-400">Pass Rate:</span>
              <span className="ml-1 text-sm font-medium text-gray-900 dark:text-white">
                {Math.round((testsCount.passed / testsCount.total) * 100)}%
              </span>
            </div>
            <div className="flex items-center mt-2">
              <svg className="h-5 w-5 text-gray-400 dark:text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm text-gray-600 dark:text-gray-400">Avg. Test Runtime:</span>
              <span className="ml-1 text-sm font-medium text-gray-900 dark:text-white">1.2s</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 text-sm">
        <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
          View data profile →
        </a>
      </div>
    </div>
  );
} 