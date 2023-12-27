import React ,{useState}from "react";
import Card from "../UI/Card";
import './AddUsers.css';
import Button from "../UI/Button";
import ErrorModal from "./ErrorModal";
const AddUsers = (props) =>{

    const [enteredName, setEnterrdName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const addUserHandler =(event) =>{
         event.preventDefault();
            
         if(enteredName.trim().length === 0 || enteredAge.trim().length ===0){
              setErrorMsg({
                title: 'Invalid Input',
                message:'Please enetr valid name or age ?'
              })
             return;
         }
         if(+enteredAge < 1){
            setErrorMsg({
                title:'Invalid Age',
                message : 'Please enter a valid age >0 .'
            })
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

         function errorHandler(){
            setErrorMsg(null);
         }
    return(
        <div>
            {errorMsg && <ErrorModal errorClear={errorHandler} title={errorMsg.title} message={errorMsg.message}></ErrorModal>}
          <Card className ='input'>
           <form onSubmit={addUserHandler} className="form">
              <label htmlFor="userName">userName</label>
              <input id="userName" type="text" value={enteredName} onChange={usernameChangeHandler}/> 
              <label htmlFor="Age">Age(year)</label>
              <input id="userAge" type="number" value={enteredAge} onChange={ageChangeHandler}/>
              <Button type='submit'>Add User</Button>

           </form>
           </Card>
           </div>
    );
}

export default  AddUsers;