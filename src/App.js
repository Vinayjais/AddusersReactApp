import React,{useState} from "react";
import AddUsers from "./componetnts/Users/AddUsers";
import UsersList from "./componetnts/Users/UsersList";

const users=[];
function App (){

    const [prevUsers,setUsers] = useState(users);

     function saveInputData(userData){
      setUsers((preUsers)=>{
              return [...preUsers, userData]
      })
     }

    return (
        <div>
              <AddUsers inputDataHandler={saveInputData} ></AddUsers>
              <UsersList users={prevUsers}></UsersList>
        </div>
    );

}

export default App;