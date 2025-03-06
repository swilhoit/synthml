import React from 'react';

interface CorrelationMatrixProps {
  data: {
    columns: string[];
    matrix: number[][];
  };
}

export default function CorrelationMatrixChart({ data }: CorrelationMatrixProps) {
  const { columns, matrix } = data;
  
  // Function to determine the color based on correlation value
  const getColorForValue = (value: number) => {
    if (value === 1) return 'bg-blue-600';
    if (value > 0.7) return 'bg-blue-500';
    if (value > 0.5) return 'bg-blue-400';
    if (value > 0.3) return 'bg-blue-300';
    if (value > 0.1) return 'bg-blue-200';
    if (value > -0.1) return 'bg-gray-200';
    if (value > -0.3) return 'bg-red-200';
    if (value > -0.5) return 'bg-red-300';
    if (value > -0.7) return 'bg-red-400';
    return 'bg-red-500';
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow overflow-auto">
      <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">
        Correlation Matrix
      </h3>
      <div className="flex">
        {/* Empty top-left cell */}
        <div className="w-16 h-16 flex-shrink-0"></div>
        
        {/* Column headers */}
        <div className="flex">
          {columns.map((col, i) => (
            <div 
              key={`header-${i}`} 
              className="w-12 h-16 flex-shrink-0 flex items-center justify-center"
            >
              <div className="transform -rotate-45 text-xs font-medium text-gray-700 dark:text-gray-300 truncate w-16 text-center">
                {col}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Matrix rows */}
      {matrix.map((row, rowIndex) => (
        <div key={`row-${rowIndex}`} className="flex">
          {/* Row header */}
          <div className="w-16 h-12 flex-shrink-0 flex items-center">
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300 truncate max-w-full px-2">
              {columns[rowIndex]}
            </span>
          </div>
          
          {/* Row cells */}
          <div className="flex">
            {row.map((value, colIndex) => (
              <div 
                key={`cell-${rowIndex}-${colIndex}`} 
                className={`w-12 h-12 flex-shrink-0 flex items-center justify-center ${
                  getColorForValue(value)
                } hover:opacity-80 transition-opacity`}
                title={`${columns[rowIndex]} ↔ ${columns[colIndex]}: ${value.toFixed(2)}`}
              >
                <span className="text-xs font-medium text-gray-900 dark:text-gray-900">
                  {value.toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
      
      {/* Legend */}
      <div className="mt-4 flex items-center justify-center space-x-2">
        <span className="text-xs text-gray-500 dark:text-gray-400">-1</span>
        <div className="flex h-2 w-64">
          <div className="w-1/5 bg-red-500 h-full"></div>
          <div className="w-1/5 bg-red-300 h-full"></div>
          <div className="w-1/5 bg-gray-200 h-full"></div>
          <div className="w-1/5 bg-blue-300 h-full"></div>
          <div className="w-1/5 bg-blue-500 h-full"></div>
        </div>
        <span className="text-xs text-gray-500 dark:text-gray-400">+1</span>
      </div>
    </div>
  );
} 