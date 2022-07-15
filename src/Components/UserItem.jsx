import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";

Modal.setAppElement("#root");

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    background: "rgba(0,0,0,0.5)"
  }
};

const UserItem = ({ user, deleteUser, updateUser }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    reset(user);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const sumbitForm = (data) => {
    updateUser(user.id, data);
    closeModal();
  };

  const tooglePassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
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
          }}
          style={{ cursor: "pointer" }}
          className="fa-solid fa-pencil"
        ></i>
      </div>
      <div className="list-date">
        <i className="fa-solid fa-cake-candles"></i>
        <p style={{alignSelf: "end"}}>{user.birthday}</p>
      </div>
      <Modal
        style={modalStyles}
        onRequestClose={() => {
          closeModal();
        }}
        isOpen={isModalOpen}
      >
        <div className="form modal-form">
          <h1 className="title">Update User</h1>
          <form onSubmit={handleSubmit(sumbitForm)}>
            <i
              style={{ order: "1", alignSelf: "center" }}
              className="fa-solid fa-user"
            ></i>
            <div className="inputNames" style={{ order: "2" }}>
              <input
                required
                {...register("first_name")}
                type="text"
                placeholder="first name"
              />
              <input
                required
                {...register("last_name")}
                type="text"
                placeholder="last name"
              />
            </div>
            <i style={{ order: "3" }} className="fa-solid fa-envelope"></i>
            <input
              required
              style={{ order: "4" }}
              {...register("email")}
              type="email"
              placeholder="email"
            />
            <i style={{ order: "5" }} className="fa-solid fa-lock"></i>
            <div className="password-div" style={{ order: "6" }}>
              <input
                required
                {...register("password")}
                type={isPasswordVisible ? "text" : "password"}
                placeholder="password"
              />
              {isPasswordVisible ? (
                <i
                  onClick={tooglePassword}
                  style={{ alignSelf: "center", justifySelf: "center" }}
                  className="fa-regular fa-eye"
                ></i>
              ) : (
                <i
                  onClick={tooglePassword}
                  style={{ alignSelf: "center", justifySelf: "center" }}
                  className="fa-regular fa-eye-slash"
                ></i>
              )}
            </div>
            <i style={{ order: "7" }} className="fa-solid fa-cake-candles"></i>
            <input
              required
              style={{ order: "8" }}
              {...register("birthday")}
              type="date"
            />
            <button
              style={{
                order: "9",
                gridColumn: "2/3",
              }}
              className="form-btn"
            >
              Update
            </button>
            <button
              onClick={() => {
                closeModal();
              }}
              type="button"
              className="form-btn cancel-btn"
              style={{ order: "10" }}
            >
              Cancel
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default UserItem;
