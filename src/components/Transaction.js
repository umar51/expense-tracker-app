import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const Transaction = ({transaction}) => { //here either we can use (prop) to recieve the prop from TransactionList , here we used destructuring anotation {transaction}
    const sign = transaction.amount < 0 ? "-" : "+"; //to have sign for expense and salary separately
    //to have green border for salary and red for expenses, we have css for class named "minus" and "plus" 
    
    const {deleteTransaction} = useContext(GlobalContext);
    return (
            <div>
                <li className={transaction.amount < 0 ? "minus": "plus"}>
                        {transaction.text} 
                        <span>{sign}${Math.abs(transaction.amount)}</span>
                        <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
                </li> 
            </div>
        )
    }
