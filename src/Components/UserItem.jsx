import React from "react";

const UserItem = ({ user, deleteUser, selectUser }) => {
  return (
    <div className="user-list">
      <h3>
        {user.first_name} {user.last_name}
      </h3>
      <p>{user.email}</p>
      <div className="edit-delete-btn">
        <i
          onClick={() => deleteUser(user.id)}
          style={{ color: "#EF5350", cursor: "pointer" }}
          className="fa-solid fa-trash"
        ></i>
        <i
          onClick={() => selectUser(user)}
          style={{ cursor: "pointer" }}
          className="fa-solid fa-pencil"
        ></i>
      </div>
      <div className="list-date">
        <i className="fa-solid fa-cake-candles"></i>
        <p>{user.birthday}</p>
      </div>
    </div>
  );
};

export default UserItem;
