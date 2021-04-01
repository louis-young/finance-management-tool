import { useState } from "react";
import { EditExpenseForm } from "../EditExpenseForm";
import type { ExpenseListItemProps } from "./types";

export const ExpenseListItem = ({
  id,
  label,
  amount,
  category,
  editExpense,
  deleteExpense,
}: ExpenseListItemProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleDeleteClick = () => {
    deleteExpense(id);
  };

  if (isEditing) {
    return (
      <EditExpenseForm
        initialLabel={label}
        initialAmount={amount}
        initialCategory={category}
        id={id}
        editExpense={editExpense}
        setIsEditing={setIsEditing}
      />
    );
  }

  return (
    <li>
      Label: {label}
      <br />
      Amount: {amount}
      <br />
      Category: {category}
      <br />
      <button onClick={handleEditClick}>Edit</button>
      <button onClick={handleDeleteClick}>Delete</button>
    </li>
  );
};
