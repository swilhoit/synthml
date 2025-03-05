import Link from 'next/link';

// Component for member card with role selection and action buttons
function TeamMember({ 
  name, 
  email, 
  role, 
  status, 
  lastActive 
}: { 
  name: string;
  email: string;
  role: string;
  status: 'active' | 'invited' | 'inactive';
  lastActive: string;
}) {
  const statusClasses = {
    active: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
    invited: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
    inactive: 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400',
  };
  
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-5 font-mono">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white text-lg font-medium">
            {getInitials(name)}
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium">{name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{email}</p>
          </div>
        </div>
        <span className={`px-2 py-1 text-xs rounded-full ${statusClasses[status]}`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>
      
      <div className="mb-4">
        <label htmlFor={`role-${email}`} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Role
        </label>
        <select
          id={`role-${email}`}
          className="block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          defaultValue={role}
          disabled={status === 'invited'}
        >
          <option value="owner">Owner</option>
          <option value="admin">Administrator</option>
          <option value="data_engineer">Data Engineer</option>
          <option value="data_scientist">Data Scientist</option>
          <option value="privacy_officer">Privacy Officer</option>
          <option value="analytics_manager">Analytics Manager</option>
          <option value="viewer">Viewer</option>
        </select>
      </div>
      
      <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
        <div className="flex justify-between items-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {status === 'active' ? `Last active: ${lastActive}` : 
             status === 'invited' ? 'Invitation sent' : 'Inactive account'}
          </p>
          <div className="flex space-x-2">
            {status === 'invited' ? (
              <button className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-300">
                Resend Invite
              </button>
            ) : (
              <button className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-300">
                Edit Permissions
              </button>
            )}
            <button className="text-sm text-red-600 dark:text-red-400 hover:text-red-900 dark:hover:text-red-300">
              {status === 'invited' ? 'Cancel Invite' : 'Remove'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Component for rendering permission toggles
function PermissionGroup({ title, permissions }: { title: string; permissions: string[] }) {
  return (
    <div className="mb-6">
      <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">{title}</h3>
      <div className="space-y-2">
        {permissions.map((permission) => (
          <div key={permission} className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id={`permission-${permission.toLowerCase().replace(/\s+/g, '-')}`}
                name={`permission-${permission.toLowerCase().replace(/\s+/g, '-')}`}
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                defaultChecked
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor={`permission-${permission.toLowerCase().replace(/\s+/g, '-')}`} className="font-medium text-gray-700 dark:text-gray-300">
                {permission}
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Team() {
  const teamMembers = [
    { name: 'Alex Smith', email: 'alexsmith@example.com', role: 'owner', status: 'active' as const, lastActive: '2 minutes ago' },
    { name: 'Maya Johnson', email: 'maya@example.com', role: 'admin', status: 'active' as const, lastActive: '1 hour ago' },
    { name: 'Sam Davis', email: 'sam@example.com', role: 'data_scientist', status: 'active' as const, lastActive: '3 hours ago' },
    { name: 'Taylor Wilson', email: 'taylor@example.com', role: 'privacy_officer', status: 'active' as const, lastActive: '2 days ago' },
    { name: 'Jordan Lee', email: 'jordan@example.com', role: 'data_engineer', status: 'invited' as const, lastActive: '' },
    { name: 'Casey Morgan', email: 'casey@example.com', role: 'viewer', status: 'inactive' as const, lastActive: '30 days ago' },
  ];
  
  const rolePermissions = {
    'Data Access': [
      'View Data Sources',
      'Connect New Data Sources',
      'Manage Data Connections',
      'Delete Data Sources',
    ],
    'Model Management': [
      'View Models',
      'Create Models',
      'Edit Model Configuration',
      'Run Training Jobs',
      'Delete Models',
    ],
    'Generation & Monitoring': [
      'View Generation Jobs',
      'Create Generation Jobs',
      'Cancel Running Jobs',
      'Access System Metrics',
      'Configure Alerts',
    ],
    'Export & Integration': [
      'View Exports',
      'Create Manual Exports',
      'Configure Scheduled Exports',
      'Manage Integrations',
    ],
    'Team & Administration': [
      'Invite Team Members',
      'Manage User Roles',
      'Access Billing',
      'Modify Subscription',
      'View Audit Logs',
    ],
  };
  
  return (
    <div className="space-y-6 font-mono">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Team Management</h1>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium transition">
          Invite Team Member
        </button>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <h2 className="text-lg font-medium mb-2">Team Overview</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Manage your team members and their access levels. Currently using 6 of 10 available seats.
            </p>
          </div>
          <div className="flex flex-col justify-center md:items-end">
            <div className="flex items-center text-sm">
              <span className="font-medium mr-2">Subscription Plan:</span>
              <span className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400 px-2 py-1 rounded text-xs font-medium">
                Professional (10 seats)
              </span>
              <Link href="/dashboard/settings/billing" className="ml-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-300 text-sm">
                Upgrade
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
          <h2 className="text-lg font-medium mb-4">Team Members (6)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <TeamMember key={member.email} {...member} />
            ))}
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 className="text-lg font-medium mb-4">Role Permissions</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
          Configure the default permissions for each role in your organization.
        </p>
        
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
          <div className="mb-6">
            <label htmlFor="role-select" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Select Role to Configure
            </label>
            <select
              id="role-select"
              className="block w-full md:w-64 rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              defaultValue="data_scientist"
            >
              <option value="owner">Owner</option>
              <option value="admin">Administrator</option>
              <option value="data_engineer">Data Engineer</option>
              <option value="data_scientist">Data Scientist</option>
              <option value="privacy_officer">Privacy Officer</option>
              <option value="analytics_manager">Analytics Manager</option>
              <option value="viewer">Viewer</option>
            </select>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
            {Object.entries(rolePermissions).map(([groupTitle, perms]) => (
              <PermissionGroup key={groupTitle} title={groupTitle} permissions={perms} />
            ))}
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-700 pt-6 flex justify-end">
            <button type="button" className="bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600 shadow-sm rounded-md px-4 py-2 text-sm text-gray-700 dark:text-gray-300 font-medium mr-3">
              Reset to Default
            </button>
            <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Save Permissions
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 className="text-lg font-medium mb-4">Audit Log</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
          Review recent changes to team members and permissions.
        </p>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-900/50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Action</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">User</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Performed By</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {[
                { action: 'Invited Team Member', user: 'Jordan Lee', by: 'Alex Smith', date: '5 hours ago' },
                { action: 'Changed Role', user: 'Taylor Wilson', by: 'Maya Johnson', date: '1 day ago' },
                { action: 'Updated Permissions', user: 'Sam Davis', by: 'Alex Smith', date: '3 days ago' },
                { action: 'Revoked Access', user: 'Casey Morgan', by: 'Alex Smith', date: '5 days ago' },
                { action: 'Added to Team', user: 'Taylor Wilson', by: 'Alex Smith', date: '2 weeks ago' },
              ].map((log, i) => (
                <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{log.action}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{log.user}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{log.by}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{log.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-4 flex justify-center">
          <button className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-300">
            View Full Audit History
          </button>
        </div>
      </div>
    </div>
  );
} 