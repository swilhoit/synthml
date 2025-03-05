'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// Sample data for the chart
const data = [
  {
    name: 'Correlation',
    original: 1,
    synthetic: 0.92,
  },
  {
    name: 'Distribution',
    original: 1,
    synthetic: 0.89,
  },
  {
    name: 'Coverage',
    original: 1,
    synthetic: 0.95,
  },
  {
    name: 'Uniqueness',
    original: 1,
    synthetic: 0.87,
  },
  {
    name: 'Relationships',
    original: 1,
    synthetic: 0.91,
  },
  {
    name: 'Cardinality',
    original: 1,
    synthetic: 0.94,
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
      </div>
    );
  }

  return null;
};

export default function DataQualityChart() {
  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            type="number" 
            domain={[0, 1]} 
            tickFormatter={(value) => `${(value * 100).toFixed(0)}%`} 
          />
          <YAxis dataKey="name" type="category" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="original" name="Original Data" fill="#8884d8" barSize={20} />
          <Bar dataKey="synthetic" name="Synthetic Data" fill="#82ca9d" barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
} 