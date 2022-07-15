import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const UserForm = ({ addUser}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  const autofill = () => {
    reset({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      birthday: "",
    });
  };

  const sumbitForm = (data) => {
    addUser(data);
    autofill();
  };

  const tooglePassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="form">
      <h1 className="title">New User</h1>
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
          }}
          className="form-btn"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default UserForm;
