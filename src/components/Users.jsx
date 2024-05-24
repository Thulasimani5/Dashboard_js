import React from 'react';

const Users = () => {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Michael Brown', email: 'michael@example.com', role: 'User' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Users</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <input type="text" placeholder="Search users" style={{ padding: '10px', width: '300px' }} />
        <button style={{ padding: '10px', backgroundColor: 'blue', color: 'white' }}>Add User</button>
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '10px' }}>ID</th>
            <th style={{ border: '1px solid black', padding: '10px' }}>Name</th>
            <th style={{ border: '1px solid black', padding: '10px' }}>Email</th>
            <th style={{ border: '1px solid black', padding: '10px' }}>Role</th>
            <th style={{ border: '1px solid black', padding: '10px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td style={{ border: '1px solid black', padding: '10px' }}>{user.id}</td>
              <td style={{ border: '1px solid black', padding: '10px' }}>{user.name}</td>
              <td style={{ border: '1px solid black', padding: '10px' }}>{user.email}</td>
              <td style={{ border: '1px solid black', padding: '10px' }}>{user.role}</td>
              <td style={{ border: '1px solid black', padding: '10px', textAlign: 'right' }}>
                <button style={{ marginRight: '10px' }}>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
