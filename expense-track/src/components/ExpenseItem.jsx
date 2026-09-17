export function ExpeseItem({ expense, onDelete }) {
  const isIncome = expense.type === "income";

  return (
    <div className="expense-item">
      <div className="expense-item-info">
        <span className="expense-item-description">{expense.description}</span>
        <span className="expense-item-category">{expense.category}</span>
      </div>
      <span
        className={
          isIncome
            ? "expense-item__amount--income"
            : "expense-item__amount--expense"
        }
      >
        {isIncome ? "+" : "-"}${expense.amount.toFixed(2)}
      </span>
      <button
        onClick={() => onDelete(expense.id)}
        className="expense-item-delete"
      >
        {" "}
        🗑
      </button>
    </div>
  );
}
