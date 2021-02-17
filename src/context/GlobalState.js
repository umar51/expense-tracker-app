import React, { createContext, useReducer} from 'react';
import AppReducer from './AppReducer.js'

//inintial state object

const initialState = {
    transactions: [
        //used dummy transactions for building reference
        // { id: 1, text: 'Flower', amount: -20 }, //expense is negative number
        // { id: 2, text: 'Salary', amount: 300 }, //salary is positive number
        // { id: 3, text: 'Book', amount: -10 },
        // { id: 4, text: 'Camera', amount: 150 } 
    ]
}

//Create context

export const GlobalContext = createContext(initialState);

//Provider of Global context

export const GlobalProvider = ({children}) => {  //passing children destructuring as provider will be wrapped on other components
    const [state, dispatch] = useReducer(AppReducer, initialState); //for actions

//Actions
    function deleteTransaction(id) {
        dispatch({   //passing the object of elements type and payload to dispatch method, elements of dispatch are actions defined in Reducer
            type: 'DELETE_TRANSACTION', //type of action
            payload: id    //id of transaction on which action will effect 
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return (<GlobalContext.Provider value={{ //value prop is passed down the provider which has transaction object as value
        transactions: state.transactions, //state.transactions will give access to all elements of transaction object 
        deleteTransaction,
        addTransaction

    }}>
        {children}
    </GlobalContext.Provider>)
}