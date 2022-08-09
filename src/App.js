import React, { useState } from 'react';
import "./Styles/App.css"
import Users from "./Components/Users";
import NewUser from "./UserInput/NewUser"
const initialData = [
  {
    id: "e1",
    userName: "Shantanu",
    age: 19,
  },
  {
    id: "e2",
    userName: "Vinit",
    age: 82,
  },
  {
    id: "e3",
    userName: "Ayush",
    age: 24,
  },
  {
    id: "e4",
    userName: "Sohum",
    age: 22,
  },
  {
    id: "e5",
    userName: "Vedant",
    age: 18,
  },
  {
    id: "e6",
    userName: "Shreyash",
    age: 9,
  },
];

const App = () => {

  const [user,setUser] = useState(initialData);

  const addUserHandler = (newData)=>{
    // console.log(newData);
    setUser((prevData) =>{
      return [newData,...prevData];
    })
  }

  return (
    <div className="app">
    <NewUser onAddUser = {addUserHandler}/>
      <Users userList={user} />
    </div>
  );
};

export default App;
