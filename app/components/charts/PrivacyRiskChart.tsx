'use client';

import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

// Sample data for the chart
const data = [
  {
    metric: 'Re-identification',
    risk: 0.05,
    maxRisk: 0.3,
  },
  {
    metric: 'Attribute Disclosure',
    risk: 0.07,
    maxRisk: 0.3,
  },
  {
    metric: 'Membership Inference',
    risk: 0.03,
    maxRisk: 0.3,
  },
  {
    metric: 'Model Inversion',
    risk: 0.04,
    maxRisk: 0.3,
  },
  {
    metric: 'Linkage Attack',
    risk: 0.08,
    maxRisk: 0.3,
  },
  {
    metric: 'Outlier Exposure',
    risk: 0.06,
    maxRisk: 0.3,
  },
];

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
            {`${entry.name}: ${(entry.value * 100).toFixed(1)}%`}
          </p>
        ))}
        <p className="text-xs mt-1 text-gray-500">Lower is better</p>
      </div>
    );
  }

  return null;
};

export default function PrivacyRiskChart() {
  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="metric" />
          <PolarRadiusAxis angle={30} domain={[0, 0.3]} tickFormatter={(value) => `${(value * 100).toFixed(0)}%`} />
          <Radar
            name="Current Risk"
            dataKey="risk"
            stroke="#FF4560"
            fill="#FF4560"
            fillOpacity={0.6}
          />
          <Radar
            name="Maximum Acceptable"
            dataKey="maxRisk"
            stroke="#775DD0"
            fill="#775DD0"
            fillOpacity={0.15}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
      <div className="flex justify-center mt-2">
        <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 text-xs font-medium px-2.5 py-0.5 rounded">
          Privacy Score: A+ (Epsilon = 2.1)
        </div>
      </div>
    </div>
  );
} 