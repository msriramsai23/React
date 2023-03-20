import "./Expenseitem.css";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

//using props
function ExpenseItem(props) {
  //Return  statement  must be wrapped in div
  return (
    //className instead of class

    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
    </Card>
  );
}

export default ExpenseItem;
