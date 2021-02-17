import React, {useContext} from 'react';

import { GlobalContext} from '../context/GlobalState';

export const IncomeExpenses = () => {

    const {transactions} = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount); //geting array of amount of each item in transactions by mapping on them 
    
    const income = amounts
    .filter(item => item > 0)//filter metod on array, it selects on those amounts than are greater than 0
    .reduce((acc, item) => (acc += item), 0) //reduce method adds up all filtered amounts
    .toFixed(2); //making the totla upto two decimal places

    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
        -1     //similarly filters negative values, adds them and puts -ve sign by multiplying -1
    ).toFixed(2);

        return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">+${income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">-${expense}</p>
            </div>
      </div>
    )
}
