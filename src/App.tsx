import { useState } from "react";
import type { Expense } from "./types/expense";

const mockCategories = ["Leisure", "Bills", "Shopping"];
const mockExpenses = [
  { label: "Gym", amount: 30, category: "Leisure", id: 0 },
  { label: "Tax", amount: 200, category: "Bills", id: 1 },
];

export const App = () => {
  const [categories, setCategories] = useState<string[]>(mockCategories);
  const [expenses, setExpenses] = useState<Expense[]>(mockExpenses);

  return (
    <section>
      <h1>Finances</h1>

      <h2>Categories:</h2>

      <ul>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>

      <h2>Expenses:</h2>

      <ul>
        {expenses.map(({ id, label, amount, category }) => (
          <li key={id}>
            Label: {label}
            <br />
            Amount: {amount}
            <br />
            Category: {category}
            <br />
          </li>
        ))}
      </ul>
    </section>
  );
};
