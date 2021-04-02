import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import {
  calculateExpensePercentage,
  formatExpenseChartData,
} from "./utilities";
import { CHART_COLOURS } from "./constants";

import type { ExpenseChartProps } from "./types";

export const ExpenseChart = ({
  expenses,
  totalExpenses,
}: ExpenseChartProps) => {
  const data = formatExpenseChartData(expenses);

  return (
    <section>
      <ResponsiveContainer width={350} height={350}>
        <PieChart>
          <Pie
            data={data}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            label={({ name, value }) =>
              `${name} (${calculateExpensePercentage(value, totalExpenses)}%)`
            }
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={CHART_COLOURS[index % CHART_COLOURS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </section>
  );
};
