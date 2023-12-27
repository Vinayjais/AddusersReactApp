
import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import './ErrorModal.css'

const ErrorModel = (props) =>{
    return(
        <div>   
            
               <div className="backdrop" onClick={props.errorClear}/>
                <Card className='modal'>
                <header className="header">
                    <h2>{props.title}</h2>
                </header>
                <div className="content">
                    <p>{props.message}</p>
                </div>
                <footer className="actions">
                    <Button onClick={props.errorClear}>Okay</Button>
                </footer>
        </Card>
        </div>
 
    );
}

export default ErrorModel;