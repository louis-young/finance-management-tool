import { useState } from "react";
import { v4 as uuid } from "uuid";
import { categories } from "../../constants/categories";
import { AddExpenseFormProps } from "./types";
import type { FormEvent } from "react";

export const AddExpenseForm = ({ addExpense }: AddExpenseFormProps) => {
  const [label, setLabel] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const id = uuid();

    const expenseToAdd = {
      label,
      amount,
      category,
      id,
    };

    addExpense(expenseToAdd);
  };

  return (
    <section>
      <h2>Add Expense: </h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="expense">
          Expense:
          <input
            type="text"
            id="expense"
            value={label}
            onChange={(event) => setLabel(event.target.value)}
            required
          />
        </label>

        <label htmlFor="amount">
          Amount:
          <input
            type="number"
            id="amount"
            min={0}
            value={amount}
            onChange={(event) => setAmount(event.target.valueAsNumber)}
            required
          />
        </label>

        <label htmlFor="category">
          Category:
          <select
            id="category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            required
          >
            <option value="">Select a category...</option>

            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Add Expense</button>
      </form>
    </section>
  );
};
