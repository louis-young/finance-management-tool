import { useState } from "react";
import { ButtonStyle } from "../../types/buttonStyle";
import { Button } from "../Button";
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
      <li className="bg-gray-50 p-6">
        <EditExpenseForm
          initialLabel={label}
          initialAmount={amount}
          initialCategory={category}
          id={id}
          editExpense={editExpense}
          setIsEditing={setIsEditing}
        />
      </li>
    );
  }

  return (
    <li className="bg-gray-50 p-6">
      <h3 className="font-semibold text-2xl mb-4">{label}</h3>

      <p className="font-medium text-2xl mb-4">£{amount}</p>

      <p className="font-medium text-xl mb-4">{category}</p>

      <div className="flex gap-4">
        <Button
          onClick={handleEditClick}
          style={ButtonStyle.Default}
          type="button"
        >
          Edit
        </Button>
        <Button
          onClick={handleDeleteClick}
          style={ButtonStyle.Danger}
          type="button"
        >
          Delete
        </Button>
      </div>
    </li>
  );
};
