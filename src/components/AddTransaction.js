// THIS COMPONENT IS FOR ADDING UP THE NEW TRANSACTIONS 
import React, { useState,useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function AddTransaction() {

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

    // It is using from globalstate for Adding trans  
const  {addTransaction}  =useContext(GlobalContext);

  const onSubmit= e =>{
    // is a method used in JavaScript to prevent
    //  the default behavior of an event from occurring. for eg submit of form     
    e.preventDefault();


    const newTransaction={
//  Generating new random id's      
      id:Math.floor(Math.random() * 100000000),
      text,
  //  For converting it into number    
      amount:+amount
    }
    addTransaction(newTransaction);
    setAmount(0)
    setText("")
  }
  return (
    <>
       <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income) 
          </label><br/>
          <span style={{marginTop:'5px',marginBottom:"20px",fontWeight:600}}>Add Signs accordingly</span>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
}

export default AddTransaction;
