import { useState } from "react";
import "./App.css";
import { AddExpenseForm } from "./components/AddExpenseForm";
import { CategoryChart } from "./components/CategoryChart";
import { ExpenseList } from "./components/ExpenseList";
import { FilterBar } from "./components/FilterBar";
import { Summary } from "./components/Summary";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [filterCategory, setFilterCategory] = useState("all");

  function addExpense(newExpense) {
    setExpenses((prev) => [...prev, newExpense]);
  }
  function deleteExpense(id) {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  }
  const filteredExpenses =
    filterCategory === "all"
      ? expenses
      : expenses.filter((expense) => expense.category === filterCategory);

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      <Summary expenses={expenses} />
      <AddExpenseForm onAddExpense={addExpense} />
      <FilterBar
        expenses={expenses}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
      />
      <CategoryChart expenses={expenses} />
      <ExpenseList
        expenses={filteredExpenses}
        onDeleteExpense={deleteExpense}
      />
    </div>
  );
}
export default App;
