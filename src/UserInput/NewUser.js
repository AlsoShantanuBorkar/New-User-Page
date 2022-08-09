import UserForm from "./UserForm";
import "../Styles/NewUser.css"

const NewUser = (props) => {
  const newUserHandler = (incomingData) => {
    const incomingUserData = {
      ...incomingData,
      id: Math.random().toString(),
    };

    props.onAddUser(incomingUserData);
  };

  return (
    <div className="new-user">
      <UserForm onSaveNewUser={newUserHandler} />
    </div>
  );
};

export default NewUser;
