import React ,{useState}from "react";
import Card from "../UI/Card";
import './AddUsers.css';
import Button from "../UI/Button";
const AddUsers = (props) =>{

    const [enteredName, setEnterrdName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const addUserHandler =(event) =>{
         event.preventDefault();
            
         if(enteredName.trim().length === 0 || enteredAge.trim().length ===0){
             return;
         }
         if(+enteredAge < 1){
            return;
         }
         const inputData = {
              userName: enteredName,
              age: enteredAge,
              id: Math.random().toString()
         }

      
         props.inputDataHandler(inputData)
       
         setEnterrdName('');
         setEnteredAge('');
    }
    
    function usernameChangeHandler(event){
   setEnterrdName(event.target.value);
    }
    function ageChangeHandler(event){
        setEnteredAge(event.target.value);
         }
    return(
          <Card className ='input'>
           <form onSubmit={addUserHandler} className="form">
              <label htmlFor="userName">userName</label>
              <input id="userName" type="text" value={enteredName} onChange={usernameChangeHandler}/> 
              <label htmlFor="Age">Age(year)</label>
              <input id="userAge" type="number" value={enteredAge} onChange={ageChangeHandler}/>
              <Button type='submit'>Add User</Button>

           </form>
           </Card>
    );
}

export default  AddUsers;