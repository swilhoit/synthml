'use client';

import React from 'react';

interface DataPoint {
  id: string | number;
  x: number;
  y: number;
  isOutlier: boolean;
  label?: string;
}

interface OutlierDetectionChartProps {
  title: string;
  data: DataPoint[];
  xLabel: string;
  yLabel: string;
}

export default function OutlierDetectionChart({
  title,
  data,
  xLabel,
  yLabel
}: OutlierDetectionChartProps) {
  // Calculate min/max values for scaling
  const xValues = data.map(d => d.x);
  const yValues = data.map(d => d.y);
  
  const xMin = Math.min(...xValues);
  const xMax = Math.max(...xValues);
  const yMin = Math.min(...yValues);
  const yMax = Math.max(...yValues);
  
  // Function to scale values to plot coordinates
  const scaleX = (x: number) => {
    const padding = 0.1 * (xMax - xMin);
    return ((x - xMin) / ((xMax - xMin) + padding * 2)) * 100;
  };
  
  const scaleY = (y: number) => {
    const padding = 0.1 * (yMax - yMin);
    return 100 - ((y - yMin) / ((yMax - yMin) + padding * 2)) * 100;
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow">
      <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">
        {title}
      </h3>
      <div className="relative h-64 w-full border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 rounded">
        {/* Plot points */}
        {data.map((point) => (
          <div
            key={point.id}
            className={`absolute w-2.5 h-2.5 rounded-full transform -translate-x-1/2 -translate-y-1/2 ${
              point.isOutlier
                ? 'bg-red-500 ring-2 ring-red-300 dark:ring-red-700'
                : 'bg-blue-500'
            }`}
            style={{
              left: `${scaleX(point.x)}%`,
              top: `${scaleY(point.y)}%`,
            }}
            title={point.label || `(${point.x.toFixed(2)}, ${point.y.toFixed(2)})`}
          ></div>
        ))}
        
        {/* Axes labels */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-6 text-xs text-gray-500 dark:text-gray-400">
          {xLabel}
        </div>
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 -rotate-90 text-xs text-gray-500 dark:text-gray-400">
          {yLabel}
        </div>
        
        {/* Legend */}
        <div className="absolute top-2 right-2 flex items-center space-x-4 text-xs bg-white dark:bg-gray-800 bg-opacity-60 dark:bg-opacity-60 p-1 rounded">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-1"></div>
            <span className="text-gray-600 dark:text-gray-300">Normal</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-1"></div>
            <span className="text-gray-600 dark:text-gray-300">Outliers</span>
          </div>
        </div>
      </div>
      <div className="mt-4 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500 dark:text-gray-400">
            Outliers: {data.filter(d => d.isOutlier).length} ({((data.filter(d => d.isOutlier).length / data.length) * 100).toFixed(1)}%)
          </span>
          <span className="text-gray-500 dark:text-gray-400">
            Total points: {data.length}
          </span>
        </div>
      </div>
    </div>
  );
} 