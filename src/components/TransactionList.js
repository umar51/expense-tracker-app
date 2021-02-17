import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';


export const TransactionList = () => {
    const { transactions} = useContext(GlobalContext); //using global context in transaction list 
    return (
        //transactions is object and .map() method willl aply whatever passed in map() to each element/transaction of object
        //here we are rendering each transaction array in other separate component of transaction, it needs to pass transaction as prop to this component and since their is list of transactions so key prop is also needed to be passed with each have id.
        <>
            <h3>History</h3>
            <ul className="list">
            
              {transactions.map(transaction => ( <Transaction key={transaction.id}  transaction={transaction}/> ))}

            </ul>
            
        </>
    )
}
