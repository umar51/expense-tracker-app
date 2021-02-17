

export default (state, action) => {
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            return{
                ...state,                     //global state initialState has object of transactions
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload ) //filter method is used over transactions object where it maps over object and passes only those transaction whose id is not equal to the id passed in payload.
            }
        case 'ADD_TRANSACTION':
            return{
                ...state,  //accessing the initialState
                transactions: [action.payload, ...state.transactions] //making array of current transactions and new transaction coming as payload 
            }
        default:
            return state; //as default it returns the state as is it
    }
}