import React, { useState } from "react";
import "../Styles/UserForm.css" 
const UserForm = (props) => {
  const [userInput, setUserInput] = useState({
    username: "",
    age: "",
  });

  // Update username
  const userNameChangeHandler = (name) => {
    setUserInput((prevState) => {
      return { ...prevState, username: name.target.value };
    });
  };

  // Update age
  const ageChangeHandler = (age) => {
    setUserInput((prevState) => {
      return { ...prevState, age: age.target.value };
    });
  };

  //  Submit data to parent component and reset input fields
  const submitHandler = (event) => {

    // if(userInput.username === '' || userInput.age === ''){
    //     window.alert("Enter ")
    // }

    // Prevent Page Reloading
    event.preventDefault();

    // Store the data inside a temp variable
    const userData = {
      userName: userInput.username,
      age: +userInput.age,
    };

    // console.log(userData);

    setUserInput({
      username: "",
      age: "",
    });

    props.onSaveNewUser(userData);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form-controls">
        <div className="form-input">
          <label>Username</label>
          <input
            type="text"
            value={userInput.username}
            onChange={userNameChangeHandler}
            required
          />
        </div>
        <div className="form-input">
          <label>Age</label>
          <input
            type="number"
            min="0"
            max="100"
            value={userInput.age}
            onChange={ageChangeHandler}
            required
          />
        </div>
      </div>
      <div className="form-button">
        <button type="submit">Add User</button>
      </div>
    </form>
  );
};

export default UserForm;
