import { useState } from "react";
import { AddExpenseForm } from "./components/AddExpenseForm";
import type { Expense } from "./types/expense";

const mockExpenses = [
  { label: "Gym", amount: 30, category: "Leisure", id: "0" },
  { label: "Tax", amount: 200, category: "Bills", id: "1" },
];

export const App = () => {
  const [expenses, setExpenses] = useState<Expense[]>(mockExpenses);

  const addExpense = (expenseToAdd: Expense) => {
    setExpenses((previousExpenses) => [...previousExpenses, expenseToAdd]);
  };

  return (
    <section>
      <h1>Finances</h1>

      <h2>Add Expense: </h2>

      <AddExpenseForm addExpense={addExpense} />

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
