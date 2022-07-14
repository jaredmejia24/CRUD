import React from "react";
import UserItem from "./UserItem";

const UserList = ({users, deleteUser, selectUser}) => {
  return (
    <ul className="all-users">
      {users.map(user=>(
        <UserItem selectUser={selectUser} deleteUser={deleteUser} key={user.id} user={user}/>
      ))}
    </ul>
  );
};

export default UserList;
