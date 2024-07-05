import React, { useContext } from "react";
// Pulling up the global context
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction"

// This is under the Income Expense

function TransactionList() {
// Transactions is an array   
  const {transactions} = useContext(GlobalContext);

  return (
    <div>
      <h3>History</h3>

      <ul class="list">
{/* Importing transactions from transactions.js  component       */}
        {transactions.map(transaction => (
        <Transaction key={transaction.id} transaction={transaction}/>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
