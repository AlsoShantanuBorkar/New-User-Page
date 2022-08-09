import UserItem from "./UserItem";
import "../Styles/UserList.css"

const UserList = (props) => {
  // console.log(props.userName);
  if (props.userData === 0) return <div>No Data Found</div>;
  return (

      <ul className="user-list">
        {props.userData.map((user) => (
          <UserItem 
            key = {user.id}
            name = {user.userName}
            age = {user.age}
          />
        ))}
        
      </ul>
  );
};

export default UserList;
