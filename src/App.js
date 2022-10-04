import React from 'react';
import './style.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

export default function App() {
  return (
    <div>
      <AddUser />
      <UsersList users={[]} />
    </div>
  );
}
