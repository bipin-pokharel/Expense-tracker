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

export