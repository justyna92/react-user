import React, { useState, Fragment } from 'react';
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
    /* <> or <Fragment> or <React.Fragment>
      This is a wrapper to use in place of the redundant divs in the root. It is not rendered to the DOM tree.
    */
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}
