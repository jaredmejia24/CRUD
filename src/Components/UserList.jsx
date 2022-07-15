import React from "react";
import UserItem from "./UserItem";

const UserList = ({users, deleteUser, updateUser}) => {
  return (
    <ul className="all-users">
      {users.map(user=>(
        <UserItem updateUser={updateUser} deleteUser={deleteUser} key={user.id} user={user}/>
      ))}
    </ul>
  );
};

export default UserList;
