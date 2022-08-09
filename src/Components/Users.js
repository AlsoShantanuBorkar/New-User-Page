import UserList from "./UserList";
import "../Styles/Users.css"

const Users = (props) => {
  return (
    <div className="users">
      <UserList userData={props.userList} />
    </div>
  );
};

export default Users;
