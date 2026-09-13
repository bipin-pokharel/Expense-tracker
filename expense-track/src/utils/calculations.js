export function getBalance(expenses) {
  return expenses.reduce((total, entry) => {
    if (entry.type === "income") {
      return total + entry.amount;
    } else {
      return total - entry.amount;
    }
  }, 0);
}

export function getTotalIncome(expenses) {
  return expenses
    .filter((entry) => entry.type === "income")
    .reduce((total, entry) => total + entry.amount, 0);
}

export function getTotalExpenses(expenses) {
  return expenses
    .filter((entry) => entry.type === "expenses")
    .reduce((total, entry) => total + entry.amount, 0);
}

export function getCategoryTotals(expenses) {
  const totals = {};

  expenses
    .filter((entry) => entry.type === "expenses")
    .forEach((entry) => {
      if (!totals[entry.category]) {
        totals[entry.category] = 0;
      }
      totals[entry.category] += entry.amount;
    });
  return Object.entries(totals).map(([category, total]) => ({
    category,
    total,
  }));
}
