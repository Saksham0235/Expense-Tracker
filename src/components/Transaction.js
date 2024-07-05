import {useContext,React} from 'react'
import { GlobalContext } from "../context/GlobalState";


// Transactions being passed as a component 
function Transaction({transaction}) {

// It is using from globalstate for deleting trans  
const { deleteTransaction } =useContext(GlobalContext);

//  Setting up signs accord to amount
const sign= transaction.amount < 0 ? '-' :'+';  
    
  return (
// setting up Border of the amount     
    <li className={transaction.amount < 0 ? 'minus':'plus'}>
    {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
    <button onClick={()=>deleteTransaction(transaction.id)} className="delete-btn">x</button>
  </li>
  )
}

export default Transaction
