import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'

const ExpensesList = (props) => {

    if (props.items.length===0){
        return(
        <div>
            <h2 className='expenses-list__fallback'>No Expenses Found</h2>
        </div>)
    }
    return (
        props.items.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ))
    )
}
export default ExpensesList;