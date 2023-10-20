import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const Budget = () => {
    const { budget, expenses, dispatch, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const updateCurrency = (value) => {
        dispatch( {
            type: "CHG_CURRENCY",
            payload: value
        })
    }
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        if(newBudget < totalExpenses) {
            alert("You cannot reduce the budget value lower than spending");
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}  


</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>

<select name="Location" id="Location"
                style={{
                    background: "#a5e1a0",
                    border: 0,
                    color: "white",
                    outline: 0,
                    fontSize: "14px"
                }}
                onChange={ (event) => updateCurrency(event.target.value) }
            >
                <option value="$">Currency ($ Dollar)</option>
                <option value="£" selected>Currency (£ Pound)</option>
                <option value="€">Currency (€ Euro)</option>
                <option value="₹">Currency (₹ Ruppee)</option>
            </select>

</div>

    );
};
export default Budget;