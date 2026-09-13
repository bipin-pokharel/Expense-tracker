import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { getCategoryTotals } from "../utils/calculations";

const COLORS = [
  "#22C55E",
  "#EF4444",
  "#3B82F6",
  "#F59E0B",
  "#A855F7",
  "#EC4899",
];

export function CategoryChart({ expenses }) {
  const data = getCategoryTotals(expenses);

  if (data.length === 0) {
    return (
      <p className="category-chart__empty">
        Add an expense to see your breakdown
      </p>
    );
  }
  return (
    <div className="category-chart">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="total"
            nameKey="category"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell key={entry.category} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
