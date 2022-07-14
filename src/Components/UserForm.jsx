import React, { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "flex",
  margin: "auto",
  borderColor: "black",
};

const UserForm = ({ addUser, selectedUser, updateUser, cancelUpdate }) => {
  const [firstName, setFirstName] = useState("");

  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const [isFormloading, setIsFormLoading] = useState(true);
  
  console.log("seleceted user");
  console.log(selectedUser);

  useEffect(() => {
    if (selectedUser !== null) {
      setFirstName(selectedUser.first_name);
      setLastName(selectedUser.last_name);
      setEmail(selectedUser.email);
      setPassword(selectedUser.password);
      setBirthday(selectedUser.birthday);
      setIsFormLoading(false);
    } else {
      setIsFormLoading(false);
      reset();
    }
  }, [selectedUser]);

  const reset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setBirthday("");
  };

  const sumbitForm = (e) => {
    e.preventDefault();
    const userObject = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      birthday: birthday,
    };
    if (selectedUser === null) {
      addUser(userObject);
      reset();
    } else {
      updateUser(selectedUser.id, userObject);
    }
  };

  return (
    <div className="form">
      {isFormloading ? (
        <ClipLoader cssOverride={override} size={160} />
      ) : (
        <>
          <h1 className="title">New User</h1>
          <form onSubmit={sumbitForm}>
            <i
              style={{ order: "1", alignSelf: "center" }}
              className="fa-solid fa-user"
            ></i>
            <div className="inputNames" style={{ order: "2" }}>
              <input
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                placeholder="first name"
              />
              <input
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                placeholder="last name"
              />
            </div>
            <i style={{ order: "3" }} className="fa-solid fa-envelope"></i>
            <input
              required
              style={{ order: "4" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="email"
            />
            <i style={{ order: "5" }} className="fa-solid fa-lock"></i>
            <input
              required
              style={{ order: "6" }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="password"
            />
            <i style={{ order: "7" }} className="fa-solid fa-cake-candles"></i>
            <input
              required
              style={{ order: "8" }}
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
              type="date"
            />
            <button
              style={{
                order: "9",
                gridColumn: selectedUser !== null ? "2/3" : "",
              }}
              className="form-btn"
            >
              {selectedUser === null ? "Create" : "Update"}
            </button>
            {selectedUser !== null && (
              <button
                onClick={cancelUpdate}
                type="button"
                className="form-btn cancel-btn"
                style={{ order: "10" }}
              >
                Cancel
              </button>
            )}
          </form>
        </>
      )}
    </div>
  );
};

export default UserForm;
