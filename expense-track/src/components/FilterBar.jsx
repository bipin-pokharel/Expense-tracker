export function FilterBar({ expenses, filterCategory, setFilterCategory }) {
  const categories = [...new Set(expenses.map((expense) => expense.category))];

  return (
    <div className="filter-Bar">
      <label>Filter By Category</label>
      <select
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)}
      >
        <option value="all">All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
