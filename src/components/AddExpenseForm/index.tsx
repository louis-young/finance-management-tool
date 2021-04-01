import { useState } from "react";
import { v4 as uuid } from "uuid";
import { AddExpenseFormProps } from "./types";
import type { FormEvent } from "react";
import { ExpenseForm } from "../ExpenseForm";

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

      <ExpenseForm
        label={label}
        setLabel={setLabel}
        amount={amount}
        setAmount={setAmount}
        category={category}
        setCategory={setCategory}
        handleSubmit={handleSubmit}
      />
    </section>
  );
};
