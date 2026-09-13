import {
  getBalance,
  getTotalExpenses,
  getTotalIncome,
} from "../utils/calculations";
export function Summary({ expenses }) {
  const balance = getBalance(expenses);
  const income = getTotalIncome(expenses);
  const expenseTotal = getTotalExpenses(expenses);

  return (
    <div className="summary">
      <div className="summary-balance">Balance : ${balance.toFixed(2)}</div>
      <div className="summary-row">
        <span className="summary__income">Income:${income.toFixed(2)}</span>
        <span className="summary__expenses">
          Expenses:${expenseTotal.toFixed(2)}
        </span>
      </div>
    </div>
  );
}
