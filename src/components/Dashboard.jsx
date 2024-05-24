import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <p>Welcome to the admin dashboard!</p>
      <div className="stats">
        <div className="stat-card">
          <h3>Users</h3>
          <p>1,234</p>
        </div>
        <div className="stat-card">
          <h3>Sales</h3>
          <p>$56,789</p>
        </div>
        <div className="stat-card">
          <h3>Orders</h3>
          <p>567</p>
        </div>
        <div className="stat-card">
          <h3>Visits</h3>
          <p>89,012</p>
        </div>
      </div>
      <div className="charts">
        <div className="chart"> <h3>Chart 1 Placeholder</h3><br />
        <img  id='th' src="https://tse3.mm.bing.net/th?id=OIP.2v3CJqdKGFW3cuGdSBomSQHaFh&pid=Api&P=0&h=180" alt="" /></div>
        <div className="chart"> <h3>Chart 1 Placeholder</h3><br />
        <img id='th1' src="https://tse3.mm.bing.net/th?id=OIP.2v3CJqdKGFW3cuGdSBomSQHaFh&pid=Api&P=0&h=180" alt="" />
        </div>
      </div>
      <div className="recent-activities">
        <h3>Recent Activities</h3>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Activity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2024-05-21</td>
              <td>User signup</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>2024-05-20</td>
              <td>Order placed</td>
              <td>Pending</td>
            </tr>
            <tr>
              <td>2024-05-19</td>
              <td>Product added</td>
              <td>Completed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
