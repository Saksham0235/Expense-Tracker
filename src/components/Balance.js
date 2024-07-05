// THIS IS THE BALANCE COMPONENT THAT KEPT RECORD OF BALANCE AND MANGES ITSELF

import {useContext,React} from 'react'
import { GlobalContext } from "../context/GlobalState";

function Balance() {
  const {transactions} = useContext(GlobalContext);

  const amounts=transactions.map(transaction => transaction.amount);

// this code calculates the total value of all the items in the amounts array
//  and returns it as a string with two decimal places.
  const total=amounts.reduce((acc,item)=>(acc+=item),0).toFixed(2);


  return (
    <>
      <h4>Your Balance</h4>
     <h1>${total}  </h1>
    </>
  )
}

export default Balance
