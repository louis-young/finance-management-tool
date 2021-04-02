import { useState } from "react";
import { ButtonStyle } from "../../types/buttonStyle";
import { formatMonetaryValue } from "../../utilities/formatMonetaryValue";
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
      <li className="bg-gray-100 p-6">
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
    <li className="bg-gray-100 p-6">
      <h3 className="font-semibold text-2xl mb-4">{label}</h3>

      <p className="font-medium text-2xl mb-4">{formatMonetaryValue(amount)}</p>

      <p className="font-medium text-lg mb-4">{category}</p>

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
