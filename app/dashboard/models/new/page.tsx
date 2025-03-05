import Link from 'next/link';

function InfoTooltip({ text }: { text: string }) {
  return (
    <div className="group relative ml-1.5 inline-block">
      <div className="flex h-4 w-4 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs">?</div>
      <div className="absolute left-1/2 bottom-full mb-2 w-60 -translate-x-1/2 transform rounded bg-gray-800 px-3 py-2 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100 z-10">
        {text}
        <div className="absolute left-1/2 top-full -mt-1 h-2 w-2 -translate-x-1/2 transform rotate-45 bg-gray-800"></div>
      </div>
    </div>
  );
}

export default function NewModel() {
  return (
    <div className="space-y-6 font-mono">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Create New Synthetic Model</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-1">Configure a model to generate synthetic data from your source datasets</p>
        </div>
        <div className="flex gap-2">
          <Link href="/dashboard/models" className="bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600 shadow-sm rounded-md px-4 py-2 text-sm text-gray-700 dark:text-gray-300 font-medium mr-3">
            Cancel
          </Link>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium transition">
            Create & Train
          </button>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="border-b border-gray-200 dark:border-gray-700 px-6 py-4">
          <div className="flex items-center space-x-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/30">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h2 className="text-lg font-medium">Basic Information</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">General information about your synthetic model</p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
            <div>
              <label htmlFor="model-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Model Name*
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="model-name"
                  id="model-name"
                  className="block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="e.g., Customer Transactions Model"
                />
              </div>
            </div>

            <div>
              <label htmlFor="model-type" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Model Type*
              </label>
              <div className="mt-1">
                <select
                  id="model-type"
                  name="model-type"
                  className="block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  defaultValue=""
                >
                  <option value="" disabled>Select model type</option>
                  <optgroup label="Tabular Data">
                    <option value="tabgan">TabGAN - General purpose tabular synthesis</option>
                    <option value="ctgan">CTGAN - Continuous data with mixed types</option>
                    <option value="copulagan">CopulaGAN - Preserves correlation structure</option>
                  </optgroup>
                  <optgroup label="Time Series">
                    <option value="timevae">TimeVAE - General purpose time series</option>
                    <option value="timegan">TimeGAN - Temporal pattern preservation</option>
                  </optgroup>
                  <optgroup label="Text & Images">
                    <option value="gpt">GPT-based - Natural language synthesis</option>
                    <option value="stable-diffusion">Stable Diffusion - Image synthesis</option>
                  </optgroup>
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Description
              </label>
              <div className="mt-1">
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  className="block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Describe the purpose and use case for this synthetic model"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="border-b border-gray-200 dark:border-gray-700 px-6 py-4">
          <div className="flex items-center space-x-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/30">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
            </div>
            <div>
              <h2 className="text-lg font-medium">Data Source Configuration</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Connect source data to train your synthetic model on</p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <label htmlFor="data-source" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Primary Data Source*
            </label>
            <div className="mt-1">
              <select
                id="data-source"
                name="data-source"
                className="block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                defaultValue=""
              >
                <option value="" disabled>Select a data source</option>
                <optgroup label="Database Connections">
                  <option value="customer_db">Customer Database (PostgreSQL)</option>
                  <option value="transactions_db">Transactions Database (MySQL)</option>
                  <option value="marketing_data">Marketing Data Warehouse (Snowflake)</option>
                </optgroup>
                <optgroup label="File Uploads">
                  <option value="customer_csv">customer_data.csv (Uploaded 2 days ago)</option>
                  <option value="transactions_parquet">transactions.parquet (Uploaded 5 days ago)</option>
                </optgroup>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="table-selection" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Tables/Entities*
            </label>
            <div className="mt-1">
              <select
                id="table-selection"
                name="table-selection"
                className="block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                defaultValue=""
              >
                <option value="" disabled>Select a table or view</option>
                <option value="customers">customers</option>
                <option value="transactions">transactions</option>
                <option value="customer_transactions_view">customer_transactions_view</option>
                <option value="demographics">demographics</option>
              </select>
            </div>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              The primary table or view with data to model. For related tables, use the relationship configuration below.
            </p>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
              Related Tables & Relationships
              <InfoTooltip text="For models with multiple related tables, define the relationships to preserve referential integrity in generated data." />
            </h3>
            
            <div className="mt-3 text-center py-6 border border-dashed border-gray-300 dark:border-gray-600 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
              </svg>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">No relationships defined yet</p>
              <button type="button" className="mt-3 inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-900/30 hover:bg-indigo-200 dark:hover:bg-indigo-800/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Add Relationship
              </button>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
              Column Configuration
              <InfoTooltip text="Configure specific handling for columns in your data source, such as categorical encoding methods, privacy settings, or generation modes." />
            </h3>
            
            <div className="mt-3 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-900/50">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-200 sm:pl-6">Column Name</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">Data Type</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">Treatment</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">Privacy Level</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">Include</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-800 bg-white dark:bg-gray-800">
                  {[
                    { name: 'customer_id', type: 'Integer', treatment: 'Categorical', privacy: 'High', include: true },
                    { name: 'name', type: 'String', treatment: 'Categorical', privacy: 'High', include: true },
                    { name: 'email', type: 'String', treatment: 'Masked', privacy: 'Very High', include: true },
                    { name: 'age', type: 'Integer', treatment: 'Continuous', privacy: 'Medium', include: true },
                    { name: 'income', type: 'Float', treatment: 'Continuous', privacy: 'High', include: true },
                    { name: 'address', type: 'String', treatment: 'Masked', privacy: 'Very High', include: false },
                  ].map((column) => (
                    <tr key={column.name}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 dark:text-white sm:pl-6">{column.name}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400">{column.type}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400">
                        <select 
                          className="block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xs"
                          defaultValue={column.treatment}
                        >
                          <option>Categorical</option>
                          <option>Continuous</option>
                          <option>Datetime</option>
                          <option>Masked</option>
                          <option>Generated</option>
                        </select>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400">
                        <select 
                          className="block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xs"
                          defaultValue={column.privacy}
                        >
                          <option>Low</option>
                          <option>Medium</option>
                          <option>High</option>
                          <option>Very High</option>
                        </select>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400">
                        <input 
                          type="checkbox" 
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          defaultChecked={column.include}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="border-b border-gray-200 dark:border-gray-700 px-6 py-4">
          <div className="flex items-center space-x-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/30">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <div>
              <h2 className="text-lg font-medium">Advanced Configuration</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Fine-tune model performance and privacy settings</p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
            <div>
              <div className="flex items-center">
                <label htmlFor="privacy-epsilon" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Privacy Epsilon (ε)
                </label>
                <InfoTooltip text="Controls the privacy-utility tradeoff. Lower values provide stronger privacy but may reduce data utility. Default: 3.0" />
              </div>
              <div className="mt-1">
                <input
                  type="range"
                  id="privacy-epsilon"
                  name="privacy-epsilon"
                  min="0.1"
                  max="10"
                  step="0.1"
                  defaultValue="3"
                  className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                  <span>Higher Privacy</span>
                  <span className="font-medium">3.0</span>
                  <span>Higher Utility</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center">
                <label htmlFor="synthesis-fidelity" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Synthesis Fidelity
                </label>
                <InfoTooltip text="Controls how closely synthetic data resembles patterns in original data. Higher values may reduce privacy protections. Default: Medium" />
              </div>
              <div className="mt-1">
                <select
                  id="synthesis-fidelity"
                  name="synthesis-fidelity"
                  className="block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  defaultValue="medium"
                >
                  <option value="low">Low - Maximum Privacy</option>
                  <option value="medium">Medium - Balanced</option>
                  <option value="high">High - Maximum Utility</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="epochs" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Training Epochs
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="epochs"
                  id="epochs"
                  className="block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  defaultValue="300"
                  min="50"
                  max="1000"
                />
              </div>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Number of training iterations. More epochs may improve quality but increase training time.
              </p>
            </div>

            <div>
              <label htmlFor="batch-size" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Batch Size
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="batch-size"
                  id="batch-size"
                  className="block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  defaultValue="500"
                  min="32"
                  max="2048"
                  step="32"
                />
              </div>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Number of samples processed in each training step.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="auto-tune"
                  name="auto-tune"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  defaultChecked
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="auto-tune" className="font-medium text-gray-700 dark:text-gray-300">
                  Enable AutoTune
                </label>
                <p className="text-gray-500 dark:text-gray-400">Automatically optimize model hyperparameters for best quality synthetic data.</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="conditioning"
                  name="conditioning"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="conditioning" className="font-medium text-gray-700 dark:text-gray-300">
                  Enable Conditional Generation
                </label>
                <p className="text-gray-500 dark:text-gray-400">Allow conditional sampling during generation (e.g., generating data for specific segments).</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4 border border-indigo-200 dark:border-indigo-800">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 dark:text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3 flex-1 md:flex md:justify-between">
            <p className="text-sm text-indigo-700 dark:text-indigo-300">
              After creating the model, it will be trained on your data. You&apos;ll receive a notification when training is complete.
            </p>
            <p className="mt-3 text-sm md:mt-0 md:ml-6">
              <Link href="/dashboard/docs/models" className="whitespace-nowrap font-medium text-indigo-700 dark:text-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300">
                Learn more <span aria-hidden="true">&rarr;</span>
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-3">
        <button type="button" className="bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600 shadow-sm rounded-md px-4 py-2 text-sm text-gray-700 dark:text-gray-300 font-medium">
          Save as Draft
        </button>
        <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Create & Train Model
        </button>
      </div>
    </div>
  );
} 