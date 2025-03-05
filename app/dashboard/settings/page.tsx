import Link from 'next/link';

export default function Settings() {
  return (
    <div className="space-y-6 font-mono">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Settings</h1>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium transition">
          Save Changes
        </button>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex -mb-px">
            {['Account', 'Profile', 'Security', 'API Keys', 'Notifications', 'Billing', 'Teams', 'Advanced'].map((tab, i) => (
              <a
                key={tab}
                href="#"
                className={`py-4 px-6 text-sm font-medium whitespace-nowrap ${
                  i === 0
                    ? 'border-b-2 border-indigo-500 text-indigo-600 dark:text-indigo-400'
                    : 'border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                {tab}
              </a>
            ))}
          </nav>
        </div>
        
        <div className="p-6">
          {/* Account Settings Section */}
          <div className="space-y-6">
            <h2 className="text-lg font-medium">Account Settings</h2>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email Address
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    defaultValue="alexsmith@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Full Name
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    defaultValue="Alex Smith"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Company Name
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    className="block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    defaultValue="Acme Corporation"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Role
                </label>
                <select
                  id="role"
                  name="role"
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  defaultValue="data_scientist"
                >
                  <option value="admin">Administrator</option>
                  <option value="data_engineer">Data Engineer</option>
                  <option value="data_scientist">Data Scientist</option>
                  <option value="privacy_officer">Privacy Officer</option>
                  <option value="analytics_manager">Analytics Manager</option>
                </select>
              </div>
            </div>
            
            <div className="pt-5 border-t border-gray-200 dark:border-gray-700">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Profile Image</label>
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xl font-medium">
                  AS
                </div>
                <div className="flex-1">
                  <div className="flex space-x-2">
                    <button type="button" className="bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600 shadow-sm rounded-md px-4 py-2 text-sm text-gray-700 dark:text-gray-300 font-medium">
                      Upload
                    </button>
                    <button type="button" className="bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600 shadow-sm rounded-md px-4 py-2 text-sm text-gray-700 dark:text-gray-300 font-medium">
                      Remove
                    </button>
                  </div>
                  <div className="mt-1 text-xs text-gray-500">
                    Recommended: Square JPG, PNG. Max 1MB.
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Security Settings Section */}
          <div className="mt-10 space-y-6 pt-5 border-t border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-medium">Security Settings</h2>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="current-password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Current Password
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    type="password"
                    name="current-password"
                    id="current-password"
                    className="block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="••••••••"
                  />
                </div>
              </div>
              
              <div className="sm:col-span-2 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="new-password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    New Password
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      type="password"
                      name="new-password"
                      id="new-password"
                      className="block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Confirm New Password
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      type="password"
                      name="confirm-password"
                      id="confirm-password"
                      className="block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="two-factor"
                    name="two-factor"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    defaultChecked
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="two-factor" className="font-medium text-gray-700 dark:text-gray-300">
                    Enable Two-Factor Authentication
                  </label>
                  <p className="text-gray-500 dark:text-gray-400">Get a code via SMS to verify your login attempts.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* API Keys Section */}
          <div className="mt-10 space-y-6 pt-5 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium">API Keys</h2>
              <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Generate New Key
              </button>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-sm font-medium">Production API Key</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Created on Nov 12, 2023</p>
                </div>
                <div className="flex space-x-2">
                  <button type="button" className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-300">
                    Regenerate
                  </button>
                  <button type="button" className="text-sm text-red-600 dark:text-red-400 hover:text-red-900 dark:hover:text-red-300">
                    Revoke
                  </button>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-md p-3 border border-gray-200 dark:border-gray-700 flex items-center justify-between">
                <code className="text-sm font-mono truncate flex-1">sk_live_7382hd78ey19nzmc83m2k8dm293mdk283md</code>
                <button type="button" className="ml-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                    <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-sm font-medium">Development API Key</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Created on Jan 5, 2024</p>
                </div>
                <div className="flex space-x-2">
                  <button type="button" className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-300">
                    Regenerate
                  </button>
                  <button type="button" className="text-sm text-red-600 dark:text-red-400 hover:text-red-900 dark:hover:text-red-300">
                    Revoke
                  </button>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-md p-3 border border-gray-200 dark:border-gray-700 flex items-center justify-between">
                <code className="text-sm font-mono truncate flex-1">sk_test_9372hd21mf71rrac21f4g2dm485mdf294md</code>
                <button type="button" className="ml-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                    <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Application Preferences */}
          <div className="mt-10 space-y-6 pt-5 border-t border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-medium">Application Preferences</h2>
            
            <div>
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Theme</h3>
              <div className="flex space-x-4 mb-6">
                <div className="relative">
                  <input 
                    type="radio" 
                    id="light" 
                    name="theme" 
                    className="sr-only peer" 
                    defaultChecked 
                  />
                  <label 
                    htmlFor="light" 
                    className="flex flex-col items-center px-5 py-3 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-indigo-600 peer-checked:bg-indigo-50 hover:bg-gray-50"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <span className="mt-2 text-sm font-medium text-gray-700">Light</span>
                  </label>
                </div>
                
                <div className="relative">
                  <input 
                    type="radio" 
                    id="dark" 
                    name="theme" 
                    className="sr-only peer" 
                  />
                  <label 
                    htmlFor="dark" 
                    className="flex flex-col items-center px-5 py-3 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-indigo-600 peer-checked:bg-indigo-50 hover:bg-gray-50"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                    <span className="mt-2 text-sm font-medium text-gray-700">Dark</span>
                  </label>
                </div>
                
                <div className="relative">
                  <input 
                    type="radio" 
                    id="system" 
                    name="theme" 
                    className="sr-only peer" 
                  />
                  <label 
                    htmlFor="system" 
                    className="flex flex-col items-center px-5 py-3 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-indigo-600 peer-checked:bg-indigo-50 hover:bg-gray-50"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="mt-2 text-sm font-medium text-gray-700">System</span>
                  </label>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Default Page</h3>
              <select
                id="default-page"
                name="default-page"
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                defaultValue="dashboard"
              >
                <option value="dashboard">Dashboard Overview</option>
                <option value="data-sources">Data Sources</option>
                <option value="models">Synthetic Models</option>
                <option value="monitoring">Monitoring</option>
                <option value="exports">Exports & Integration</option>
              </select>
            </div>
            
            <div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="email-notifications"
                    name="email-notifications"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    defaultChecked
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="email-notifications" className="font-medium text-gray-700 dark:text-gray-300">
                    Email Notifications
                  </label>
                  <p className="text-gray-500 dark:text-gray-400">Receive email updates about job completions, errors, and system updates.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-10 pt-5 border-t border-gray-200 dark:border-gray-700 flex justify-end">
            <button type="button" className="bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600 shadow-sm rounded-md px-4 py-2 text-sm text-gray-700 dark:text-gray-300 font-medium mr-3">
              Cancel
            </button>
            <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 