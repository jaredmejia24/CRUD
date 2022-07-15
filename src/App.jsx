import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import UserForm from "./Components/UserForm";
import UserList from "./Components/UserList";

function App() {
  const [users, setUsers] = useState([]);

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

  const updateUser = (id, userObject) => {
    axios
      .put(`https://users-crud1.herokuapp.com/users/${id}/`, userObject)
      .then(() => getUsers());
  }


  return (
    <div className="adjust-components">
      <div className="form-component">
        <UserForm addUser={addUser} />
      </div>
      <div className="user-component">
        <UserList updateUser={updateUser} deleteUser={deleteUser} users={users} />
      </div>
    </div>
  );
}

export default App;
