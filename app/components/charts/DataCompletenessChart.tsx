import React from 'react';

interface DataCompletenessProps {
  data: {
    column: string;
    completeness: number;
    issues?: string[];
  }[];
}

export default function DataCompletenessChart({ data }: DataCompletenessProps) {
  // Sort data by completeness percentage in ascending order
  const sortedData = [...data].sort((a, b) => a.completeness - b.completeness);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow">
      <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">
        Data Completeness by Column
      </h3>
      <div className="space-y-3">
        {sortedData.map((item) => (
          <div key={item.column} className="relative">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 truncate max-w-[180px]" title={item.column}>
                {item.column}
              </span>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {Math.round(item.completeness * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-1">
              <div
                className={`h-2.5 rounded-full ${
                  item.completeness < 0.7
                    ? 'bg-red-500'
                    : item.completeness < 0.9
                    ? 'bg-yellow-500'
                    : 'bg-green-500'
                }`}
                style={{ width: `${Math.round(item.completeness * 100)}%` }}
              ></div>
            </div>
            {item.issues && item.issues.length > 0 && (
              <div className="text-xs text-red-500 dark:text-red-400 mt-1">
                {item.issues.join(', ')}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 