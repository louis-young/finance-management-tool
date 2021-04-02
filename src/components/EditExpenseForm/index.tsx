import { useState } from "react";
import { EditExpenseFormProps } from "./types";
import type { FormEvent } from "react";
import { ExpenseForm } from "../ExpenseForm";

export const EditExpenseForm = ({
  initialLabel,
  initialAmount,
  initialCategory,
  id,
  editExpense,
  setIsEditing,
}: EditExpenseFormProps) => {
  const [label, setLabel] = useState(initialLabel);
  const [amount, setAmount] = useState(initialAmount);
  const [category, setCategory] = useState(initialCategory);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const expenseToEdit = {
      label,
      amount,
      category,
      id,
    };

    editExpense(expenseToEdit);

    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <section>
      <h2 className="font-semibold text-xl mb-6">Edit Expense ({label})</h2>

      <ExpenseForm
        label={label}
        setLabel={setLabel}
        amount={amount}
        setAmount={setAmount}
        category={category}
        setCategory={setCategory}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
      />
    </section>
  );
};
