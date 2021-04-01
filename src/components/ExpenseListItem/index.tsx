import type { ExpenseListItemProps } from "./types";

export const ExpenseListItem = ({
  id,
  label,
  amount,
  category,
  editExpense,
  deleteExpense,
}: ExpenseListItemProps) => {
  return (
    <li>
      Label: {label}
      <br />
      Amount: {amount}
      <br />
      Category: {category}
      <br />
      <button>Edit</button>
      <button onClick={() => deleteExpense(id)}>Delete</button>
    </li>
  );
};
