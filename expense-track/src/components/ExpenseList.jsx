import { ExpenseItem } from "./ExpenseItem";

export function ExpenseList({ expenses, onDeleteExpense }) {
  if (expenses.length === 0) {
    return <p className="expense-list__empty">No expenses to show</p>;
  }
  return (
    <div className="expense-list">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
          onDelete={onDeleteExpense}
        />
      ))}
    </div>
  );
}
