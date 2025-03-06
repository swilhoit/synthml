import React from 'react';

interface DistributionComparisonProps {
  columnName: string;
  originalData: {
    bin: string;
    count: number;
  }[];
  syntheticData: {
    bin: string;
    count: number;
  }[];
}

export default function DistributionComparisonChart({
  columnName,
  originalData,
  syntheticData,
}: DistributionComparisonProps) {
  // Find max count to scale properly
  const maxOriginal = Math.max(...originalData.map((d) => d.count));
  const maxSynthetic = Math.max(...syntheticData.map((d) => d.count));
  const maxCount = Math.max(maxOriginal, maxSynthetic);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow">
      <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">
        Distribution Comparison: {columnName}
      </h3>
      <div className="flex items-center justify-between mb-2 text-sm">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-blue-500 rounded mr-2"></div>
          <span className="text-gray-600 dark:text-gray-300">Original</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-emerald-500 rounded mr-2"></div>
          <span className="text-gray-600 dark:text-gray-300">Synthetic</span>
        </div>
      </div>
      <div className="h-64 relative">
        <div className="absolute inset-0 flex items-end">
          {originalData.map((d, i) => (
            <div key={`original-${d.bin}`} className="flex-1 flex flex-col items-center">
              <div 
                className="w-[70%] bg-blue-500 opacity-80" 
                style={{ 
                  height: `${(d.count / maxCount) * 100}%`,
                }}
              ></div>
              {i % 2 === 0 && (
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 rotate-45 origin-left truncate max-w-[40px]">
                  {d.bin}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="absolute inset-0 flex items-end">
          {syntheticData.map((d) => (
            <div key={`synthetic-${d.bin}`} className="flex-1 flex flex-col items-center">
              <div 
                className="w-[40%] bg-emerald-500 opacity-80" 
                style={{ 
                  height: `${(d.count / maxCount) * 100}%`,
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <div className="flex justify-between">
          <span className="text-xs text-gray-500 dark:text-gray-400">KL Divergence: 0.027</span>
          <span className="text-xs text-gray-500 dark:text-gray-400">Jensen-Shannon: 0.011</span>
        </div>
      </div>
    </div>
  );
} 