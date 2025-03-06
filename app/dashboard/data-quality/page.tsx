'use client';

import React from 'react';
import DataQualitySummary from '@/app/components/data-quality/DataQualitySummary';
import TestResultCard from '@/app/components/data-quality/TestResultCard';
import DataCompletenessChart from '@/app/components/charts/DataCompletenessChart';
import DistributionComparisonChart from '@/app/components/charts/DistributionComparisonChart';
import CorrelationMatrixChart from '@/app/components/charts/CorrelationMatrixChart';
import OutlierDetectionChart from '@/app/components/charts/OutlierDetectionChart';
import QualityScoreTimeline from '@/app/components/charts/QualityScoreTimeline';
import { TestStatus } from '@/app/components/data-quality/TestResultCard';

// Mock data for the dashboard
const mockDatasetSummary = {
  datasetName: "Customer Transactions Dataset",
  qualityScore: 82,
  testsCount: {
    total: 24,
    passed: 18,
    failed: 3,
    warning: 3
  },
  lastRun: "Today at 9:45 AM",
  columns: 12,
  rows: 258432
};

// Mock test results
const mockTestResults = [
  {
    id: 1,
    testName: "Column Completeness Check",
    status: 'passed' as TestStatus,
    description: "Validates that all required columns have sufficient data.",
    affectedColumns: ["customer_id", "transaction_date", "amount"],
    score: 96,
    runtime: "0.8s"
  },
  {
    id: 2,
    testName: "Numeric Range Validation",
    status: 'warning' as TestStatus,
    description: "Checks if numeric values are within expected ranges.",
    affectedColumns: ["amount", "items_count"],
    score: 72,
    runtime: "1.2s"
  },
  {
    id: 3,
    testName: "Column Format Validation",
    status: 'failed' as TestStatus,
    description: "Verifies that values match expected formats (emails, phone numbers, etc).",
    affectedColumns: ["email", "phone_number"],
    score: 43,
    runtime: "2.1s"
  },
  {
    id: 4,
    testName: "Duplicates Detection",
    status: 'passed' as TestStatus,
    description: "Identifies duplicate records in the dataset.",
    score: 100,
    runtime: "3.5s"
  },
  {
    id: 5,
    testName: "Cross-Column Consistency",
    status: 'warning' as TestStatus,
    description: "Checks for logical consistency between related columns.",
    affectedColumns: ["shipping_cost", "shipping_method", "country"],
    score: 68,
    runtime: "1.7s"
  },
  {
    id: 6,
    testName: "Date Range Validation",
    status: 'passed' as TestStatus,
    description: "Validates that dates fall within expected ranges.",
    affectedColumns: ["transaction_date", "shipping_date"],
    score: 94,
    runtime: "0.9s"
  }
];

// Mock data for charts
const mockCompletenessData = [
  { column: "customer_id", completeness: 1.0 },
  { column: "transaction_date", completeness: 0.98 },
  { column: "amount", completeness: 1.0 },
  { column: "items_count", completeness: 0.99 },
  { column: "shipping_cost", completeness: 0.96 },
  { column: "email", completeness: 0.85 },
  { column: "phone_number", completeness: 0.72 },
  { column: "shipping_method", completeness: 0.92 },
  { column: "country", completeness: 0.99 },
  { column: "product_category", completeness: 0.95 },
  { column: "payment_type", completeness: 0.97 },
  { column: "shipping_date", completeness: 0.88, issues: ["Missing for some recent orders"] }
];

const mockDistributionData = {
  columnName: "transaction_amount",
  originalData: [
    { bin: "$0-$20", count: 150 },
    { bin: "$21-$50", count: 280 },
    { bin: "$51-$100", count: 320 },
    { bin: "$101-$200", count: 180 },
    { bin: "$201-$500", count: 70 },
    { bin: "$501+", count: 20 }
  ],
  syntheticData: [
    { bin: "$0-$20", count: 140 },
    { bin: "$21-$50", count: 290 },
    { bin: "$51-$100", count: 300 },
    { bin: "$101-$200", count: 200 },
    { bin: "$201-$500", count: 60 },
    { bin: "$501+", count: 30 }
  ]
};

const mockCorrelationData = {
  columns: ["cust_id", "amount", "items", "ship_cost", "age", "visits"],
  matrix: [
    [1.00, 0.32, 0.28, 0.12, -0.05, 0.42],
    [0.32, 1.00, 0.85, 0.62, 0.02, 0.15],
    [0.28, 0.85, 1.00, 0.58, 0.08, 0.21],
    [0.12, 0.62, 0.58, 1.00, -0.12, -0.04],
    [-0.05, 0.02, 0.08, -0.12, 1.00, 0.18],
    [0.42, 0.15, 0.21, -0.04, 0.18, 1.00]
  ]
};

const mockOutlierData = Array.from({ length: 100 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  isOutlier: Math.random() > 0.9
}));

// Generate a few explicit outliers
mockOutlierData.push(
  { id: 101, x: 95, y: 5, isOutlier: true },
  { id: 102, x: 5, y: 95, isOutlier: true },
  { id: 103, x: 90, y: 90, isOutlier: true }
);

const mockQualityTimelineData = [
  { date: "2023-02-01", score: 74 },
  { date: "2023-02-08", score: 76 },
  { date: "2023-02-15", score: 70 },
  { date: "2023-02-22", score: 75 },
  { date: "2023-03-01", score: 79 },
  { date: "2023-03-08", score: 77 },
  { date: "2023-03-15", score: 82 },
  { date: "2023-03-22", score: 80 },
  { date: "2023-03-29", score: 82 }
];

export default function DataQualityDashboard() {
  const handleTestCardClick = (testId: number) => {
    // This function will be implemented to handle test card clicks
    console.log(`Test card clicked: ${testId}`);
    // In a real application, this could open a modal with test details
  };

  return (
    <div className="py-6 px-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Data Quality Testing</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Monitor and analyze the quality of your datasets for synthetic generation
        </p>
      </div>
      
      {/* Summary Card */}
      <div className="mb-6">
        <DataQualitySummary
          datasetName={mockDatasetSummary.datasetName}
          qualityScore={mockDatasetSummary.qualityScore}
          testsCount={mockDatasetSummary.testsCount}
          lastRun={mockDatasetSummary.lastRun}
          columns={mockDatasetSummary.columns}
          rows={mockDatasetSummary.rows}
        />
      </div>
      
      {/* Quality Score Timeline */}
      <div className="mb-6">
        <QualityScoreTimeline data={mockQualityTimelineData} />
      </div>
      
      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <DataCompletenessChart data={mockCompletenessData} />
        <DistributionComparisonChart 
          columnName={mockDistributionData.columnName} 
          originalData={mockDistributionData.originalData} 
          syntheticData={mockDistributionData.syntheticData} 
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <OutlierDetectionChart 
          title="Outlier Detection" 
          data={mockOutlierData} 
          xLabel="Amount ($)" 
          yLabel="Items Count" 
        />
        <CorrelationMatrixChart data={mockCorrelationData} />
      </div>
      
      {/* Test Results */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Test Results</h2>
          <div className="flex space-x-2">
            <select className="text-sm border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-2">
              <option>All Tests</option>
              <option>Failed Only</option>
              <option>Warnings Only</option>
              <option>Passed Only</option>
            </select>
            <button className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
              Run Tests
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {mockTestResults.map((test) => (
            <TestResultCard
              key={test.id}
              testName={test.testName}
              status={test.status}
              description={test.description}
              affectedColumns={test.affectedColumns}
              score={test.score}
              runtime={test.runtime}
              onClick={() => handleTestCardClick(test.id)}
            />
          ))}
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="flex justify-end space-x-4 mt-8">
        <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
          Export Report
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Schedule Tests
        </button>
      </div>
    </div>
  );
} 