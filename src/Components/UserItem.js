import React from "react";
import "../Styles/UserItem.css";
const UserItem = (props) => {
  // console.log(props.name);
  return (
    <li className="user-item">
      <span>Username : <span className="username">{props.name}</span></span>
      <span>Age : <span className="age">{props.age}</span></span>
        
        
      
    </li>
  );
};

export default UserItem;
