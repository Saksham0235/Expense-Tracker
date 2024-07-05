import React,{createContext, useReducer} from 'react'
import AppReducer from './AppReducer';

// initial State 
const initialState ={
    transactions:
    [
    // dummy Transactions

    ]
}

// Create context 
 export const GlobalContext=createContext(initialState);


//  Provider :-> To wrapping up all the components 
export const GlobalProvider=({children})=>{
    const [state,dispatch] = useReducer(AppReducer,initialState);

// Deleting Action 
    function deleteTransaction(id)
    {
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        });
    }

//  ADDING THE TRANSACTION FUNCTION 
function addTransaction(transaction)
{
    dispatch({
        type:'ADD_TRANSACTION',
        payload:transaction
    });
}   


    return (<GlobalContext.Provider value={{
    //  It is for showing The Transactions    
        transactions:state.transactions,
//    it is for deleting the transactions      
        deleteTransaction,
//   It is for adding the transaction 
      addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)

}