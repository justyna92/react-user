import React, { useState } from 'react';
import './style.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

export default function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (username, userAge) => {
    setUsersList((prevState) => {
      return [
        ...prevState,
        { name: username, age: userAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}
