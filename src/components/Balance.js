import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
    const {transactions} = useContext(GlobalContext); //geting the global object transactions from Global Context
    const amounts = transactions.map(transaction => transaction.amount); //saving each transaction into amount object by mapping on transactions
    const total = amounts.reduce((acc, item)=> (acc += item), 0).toFixed(2); //tofixed gives numeric values upto 2 places
                                                                          //.reduce() method is used to apply maths operations defined in its function on array elements from left to right.
                                                                          //here reduce is passed a fuction and 0 value as argument.
                                                                            //a. function does the math operation written in it where each element of array is item and acc is the sum of consective elements/item.
                                                                            //function repeats its steps for each element thus adding the previous acc with the next element/item from left to right in that array
                                                                            //b. whereas 2nd argument is initial value of acc ie 0
    
    return (
        <>
            <h4>Your Balance</h4>
            <h1>${total}</h1>
            
        </>
    )
}
