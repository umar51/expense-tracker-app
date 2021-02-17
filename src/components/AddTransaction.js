import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {

    const [text, setText] = useState(" ");
    const [amount, setAmount] = useState(0);

    const {addTransaction} = useContext(GlobalContext);


    const onSubmit = e => {
        e.preventDefault(); //stops the form submission event 

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000), //assigning the random id to new transaction
            text,   //text and amount have the new input values because of setText and setAmount
            amount: +amount   //added + sign to convert it into numeric, other wise it is passed as string and gives error when other math operations are applied to it
        }
        addTransaction(newTransaction);
    }


    // e.target.value : e is the event, which in this case is change, target is the element that triggered the event, which in this case is the input, and value is the value of the input element 
    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit} >
                <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                <label htmlFor="amount"
                    >Amount <br />
                    (negative - expense, positive - income)</label
                >
                <input type="number" value={amount} onChange={(e)=> setAmount(e.target.value)}  placeholder="Enter amount..." />
                </div>
                <button className="btn" >Add transaction</button>
            </form>
            
        </>
    )
}
