import { useState } from "react";

export function AddExpenseForm({ onAddExpense }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [type, setType] = useState("expense");

  function handleSubmit(e) {
    e.preventDefault();
    if (!description.trim() || !amount) {
      return;
    }
    const newExpense = {
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      category,
      type,
    };

    onAddExpense(newExpense);

    setDescription("");
    setAmount("");
  }

  return (
    <form onSubmit={handleSubmit} className="add-expense-form">
      <input
        type="text"
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        step="0.01"
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Food">Food</option>
        <option value="Rent">Rent</option>
        <option value="Transport">Transport</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Salary">Salary</option>
        <option value="Other">Other</option>
      </select>

      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="expense">Expense</option>
        <option value="income">income</option>
      </select>

      <button type="submit">+ Add</button>
    </form>
  );
}
