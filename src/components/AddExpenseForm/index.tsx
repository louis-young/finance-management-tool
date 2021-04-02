import { useState } from "react";
import { v4 as uuid } from "uuid";
import { AddExpenseFormProps } from "./types";
import type { FormEvent } from "react";
import { ExpenseForm } from "../ExpenseForm";

export const AddExpenseForm = ({ addExpense }: AddExpenseFormProps) => {
  const [label, setLabel] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");

  const resetFormValues = () => {
    setLabel("");
    setAmount(0);
    setCategory("");
  };

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

    resetFormValues();
  };

  return (
    <section className="bg-gray-100 rounded p-6 mt-6">
      <h2 className="font-semibold text-2xl mb-6">Add Expense</h2>

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
