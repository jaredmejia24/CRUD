import React from "react";
import UserItem from "./UserItem";

const UserList = ({users, deleteUser, selectUser, cancelUpdate}) => {
  return (
    <ul className="all-users">
      {users.map(user=>(
        <UserItem cancelUpdate={cancelUpdate} selectUser={selectUser} deleteUser={deleteUser} key={user.id} user={user}/>
      ))}
    </ul>
  );
};

export default UserList;
