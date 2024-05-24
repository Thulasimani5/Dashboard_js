import React from 'react';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Admin Dashboard</h2>
      <nav>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/reports">Reports</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
