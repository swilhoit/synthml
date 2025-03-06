import React from 'react';

interface TimelineDataPoint {
  date: string; // ISO date string
  score: number; // 0-100
  label?: string;
}

interface QualityScoreTimelineProps {
  data: TimelineDataPoint[];
  threshold?: number; // Optional threshold line
}

export default function QualityScoreTimeline({
  data,
  threshold = 70
}: QualityScoreTimelineProps) {
  // Sort data by date
  const sortedData = [...data].sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  
  // Format dates for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow">
      <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">
        Quality Score History
      </h3>
      <div className="relative h-64">
        {/* Y-axis labels */}
        <div className="absolute top-0 left-0 h-full flex flex-col justify-between text-xs text-gray-500 dark:text-gray-400 py-2">
          <div>100</div>
          <div>75</div>
          <div>50</div>
          <div>25</div>
          <div>0</div>
        </div>
        
        {/* Chart area */}
        <div className="absolute left-8 right-0 top-0 bottom-0">
          {/* Horizontal grid lines */}
          <div className="absolute left-0 right-0 top-0 h-px bg-gray-200 dark:bg-gray-700"></div>
          <div className="absolute left-0 right-0 top-1/4 h-px bg-gray-200 dark:bg-gray-700"></div>
          <div className="absolute left-0 right-0 top-1/2 h-px bg-gray-200 dark:bg-gray-700"></div>
          <div className="absolute left-0 right-0 top-3/4 h-px bg-gray-200 dark:bg-gray-700"></div>
          <div className="absolute left-0 right-0 bottom-0 h-px bg-gray-200 dark:bg-gray-700"></div>
          
          {/* Threshold line */}
          <div 
            className="absolute left-0 right-0 h-px bg-orange-500 z-10"
            style={{ top: `${100 - threshold}%` }}
          ></div>
          <div className="absolute right-0 text-xs text-orange-500 font-medium" style={{ top: `${100 - threshold}%`, transform: 'translateY(-50%)' }}>
            Threshold ({threshold})
          </div>
          
          {/* Line chart */}
          <svg className="absolute inset-0 overflow-visible">
            <defs>
              <linearGradient id="qualityGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
              </linearGradient>
            </defs>
            
            {/* Area fill */}
            <path
              d={`
                M ${0} ${100 - (sortedData[0]?.score || 0)}
                ${sortedData.map((point, i) => {
                  const x = (i / (sortedData.length - 1)) * 100;
                  const y = 100 - point.score;
                  return `L ${x} ${y}`;
                }).join(' ')}
                L ${100} ${100}
                L ${0} ${100}
                Z
              `}
              fill="url(#qualityGradient)"
              strokeWidth="0"
            />
            
            {/* Line path */}
            <path
              d={`
                M ${0} ${100 - (sortedData[0]?.score || 0)}
                ${sortedData.map((point, i) => {
                  const x = (i / (sortedData.length - 1)) * 100;
                  const y = 100 - point.score;
                  return `L ${x} ${y}`;
                }).join(' ')}
              `}
              fill="none"
              stroke="#3B82F6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            
            {/* Data points */}
            {sortedData.map((point, i) => {
              const x = (i / (sortedData.length - 1)) * 100;
              const y = 100 - point.score;
              return (
                <circle
                  key={i}
                  cx={x + '%'}
                  cy={y + '%'}
                  r="3"
                  fill={point.score < threshold ? '#EF4444' : '#3B82F6'}
                  stroke="white"
                  strokeWidth="1"
                />
              );
            })}
          </svg>
          
          {/* X-axis dates */}
          <div className="absolute left-0 right-0 bottom-0 translate-y-6 flex justify-between text-xs text-gray-500 dark:text-gray-400">
            {sortedData.map((point, i) => (
              <div key={i} className={i % 2 === 0 ? '' : 'invisible sm:visible'}>
                {formatDate(point.date)}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500 dark:text-gray-400">
            Current: {sortedData[sortedData.length - 1]?.score ?? 'N/A'}
          </span>
          <span className="text-gray-500 dark:text-gray-400">
            Average: {Math.round(sortedData.reduce((sum, point) => sum + point.score, 0) / sortedData.length)}
          </span>
          <span className="text-gray-500 dark:text-gray-400">
            Trend: {sortedData[sortedData.length - 1]?.score > sortedData[0]?.score ? '↑ Improving' : '↓ Declining'}
          </span>
        </div>
      </div>
    </div>
  );
} 