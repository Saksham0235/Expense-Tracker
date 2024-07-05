// In This We specify the applicatisons state changes in response to certain actions
// to context

// It is all referenced  for workin of GLOBALSTATE

export default (state,action)=>{
switch(action.type){
    case 'DELETE_TRANSACTION':
        return {
//  Ccreating a new State inorder to delte  with initial states         
            ...state,
//  We will send all the transactions again except that one deletd one            
            transactions: state.transactions.filter(transaction => transaction.id !==action.payload)
        }
    case 'ADD_TRANSACTION':
        return{
            ...state,
//  We need old transactions  with added one           
            transactions:[action.payload,...state.transactions]
        }    
    default:
        return state
}
}


// It is passing to GlobalState