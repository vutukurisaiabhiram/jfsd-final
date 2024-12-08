

// import React from 'react';
// import UserManagement from './UserManagement';
// import Analytics from './Analytics';
// import Settings from './Settings';
// import './AdminDashboard.css';
// import { Link } from 'react-router-dom';

// const AdminDashboard = () => {
//   return (
//     <div className="admin-dashboard">
//       <header>
//         <h1>Admin Dashboard</h1>
//         <nav>
//           <ul>
//             <li><Link href="/admin/UserManagement">User Management</Link></li>
//             <li><Link href="/admin/analytics">Analytics</Link></li>
//             <li><Link href="/admin/settings">Settings</Link></li>
//           </ul>
//         </nav>
//       </header>

      // <section id="users">
      //   <UserManagement />
      // </section>

      // <section id="analytics">
      //   <Analytics />
      // </section>

      // <section id="settings">
      //   <Settings />
      // </section>
//     </div>
//   );
// };

// export default AdminDashboard;


import React from 'react';
import {  Link } from 'react-router-dom';
import './AdminDashboard.css';
import UserManagement from './UserManagement';
import Settings from './Settings.js'; // Should match './Settings'
import Analytics from './Analytics.js'; // Should match './Analytics'


const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <header>
        <h1>Admin Dashboard</h1>
        <nav>
          <ul>
            <li><Link to="/admin/user-management">User Management</Link></li>
            <li><Link to="/admin/analytics">Analytics</Link></li>
            <li><Link to="/settings">Settings</Link></li>
          </ul>
        </nav>
      </header>
      <section id="users">

        <UserManagement />
      </section>

      <section id="analytics">
        <Analytics />
      </section>

      <section id="settings">
        <Settings />
      </section>

      {/* <main>
        <Outlet />
      </main> */}
    </div>
  );
};

export default AdminDashboard;
