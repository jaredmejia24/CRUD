import React, { useState } from "react";
import Modal from "react-modal";
import UserForm from "./UserForm";

Modal.setAppElement("#root");

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const UserItem = ({ user, deleteUser, selectUser, cancelUpdate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
          onClick={() => {
            openModal();
            selectUser(user);
          }}
          style={{ cursor: "pointer" }}
          className="fa-solid fa-pencil"
        ></i>
      </div>
      <div className="list-date">
        <i className="fa-solid fa-cake-candles"></i>
        <p>{user.birthday}</p>
      </div>
      <Modal
      style={modalStyles}
        onRequestClose={() => {
          closeModal();
          cancelUpdate();
        }}
        isOpen={isModalOpen}
      >
        <UserForm />
      </Modal>
    </div>
  );
};

export default UserItem;
