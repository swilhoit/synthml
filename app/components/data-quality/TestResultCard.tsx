'use client';

import React from 'react';

export type TestStatus = 'passed' | 'failed' | 'warning' | 'running';

interface TestResultCardProps {
  testName: string;
  status: TestStatus;
  description?: string;
  affectedColumns?: string[];
  score?: number;
  runtime?: string;
  onClick?: () => void;
}

export default function TestResultCard({
  testName,
  status,
  description,
  affectedColumns,
  score,
  runtime,
  onClick
}: TestResultCardProps) {
  const statusColors = {
    passed: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    failed: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
    warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    running: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
  };
  
  const statusIcons = {
    passed: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 dark:text-green-400" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
    failed: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 dark:text-red-400" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
      </svg>
    ),
    warning: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 dark:text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
      </svg>
    ),
    running: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 dark:text-blue-400 animate-spin" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
      </svg>
    )
  };

  return (
    <div 
      className={`bg-white dark:bg-slate-800 rounded-lg shadow p-4 cursor-pointer hover:shadow-md transition-shadow ${
        onClick ? 'cursor-pointer' : ''
      }`}
      onClick={onClick}
    >
      <div className="flex justify-between items-start">
        <div className="flex items-center">
          {statusIcons[status]}
          <h3 className="ml-2 font-medium text-gray-900 dark:text-white">{testName}</h3>
        </div>
        <div className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[status]}`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </div>
      </div>
      
      {description && (
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          {description}
        </p>
      )}
      
      <div className="mt-3 border-t border-gray-200 dark:border-gray-700 pt-3">
        <div className="grid grid-cols-2 gap-2 text-sm">
          {score !== undefined && (
            <div>
              <span className="text-gray-500 dark:text-gray-400">Score: </span>
              <span className={`font-medium ${
                score >= 80 ? 'text-green-600 dark:text-green-400' :
                score >= 60 ? 'text-yellow-600 dark:text-yellow-400' :
                'text-red-600 dark:text-red-400'
              }`}>{score}/100</span>
            </div>
          )}
          
          {runtime && (
            <div>
              <span className="text-gray-500 dark:text-gray-400">Runtime: </span>
              <span className="font-medium text-gray-700 dark:text-gray-300">{runtime}</span>
            </div>
          )}
          
          {affectedColumns && affectedColumns.length > 0 && (
            <div className="col-span-2 mt-1">
              <span className="text-gray-500 dark:text-gray-400">Affected columns: </span>
              <span className="font-medium text-gray-700 dark:text-gray-300">
                {affectedColumns.length > 3 
                  ? `${affectedColumns.slice(0, 3).join(', ')} +${affectedColumns.length - 3} more` 
                  : affectedColumns.join(', ')}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 