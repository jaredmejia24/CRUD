import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import UserForm from "./Components/UserForm";
import UserList from "./Components/UserList";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data));
  }, []);

  const getUsers = () => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data));
  };

  const addUser = (userObject) => {
    axios
      .post("https://users-crud1.herokuapp.com/users/", userObject)
      .then(() => getUsers())
      .catch(err=>console.log(err.response));
  };

  const deleteUser = (id) => {
    axios
      .delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(() => getUsers());
  };


  const selectUser = userObject =>{
    setSelectedUser(userObject);
  }

  const updateUser = (id, userObject) => {
    axios
      .put(`https://users-crud1.herokuapp.com/users/${id}/`, userObject)
      .then(() => getUsers());
    setSelectedUser(null)
  }

  const cancelUpdate = () =>{
    setSelectedUser(null);
  }

  return (
    <div className="adjust-components">
      <div className="form-component">
        <UserForm users={users} cancelUpdate={cancelUpdate} updateUser={updateUser} selectedUser={selectedUser} addUser={addUser} />
      </div>
      <div className="user-component">
        <UserList cancelUpdate={cancelUpdate} selectUser={selectUser} deleteUser={deleteUser} users={users} />
      </div>
    </div>
  );
}

export default App;
