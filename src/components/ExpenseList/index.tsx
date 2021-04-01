import { ExpenseListItem } from "../ExpenseListItem";
import type { ExpenseListProps } from "./types";

export const ExpenseList = ({
  expenses,
  editExpense,
  deleteExpense,
}: ExpenseListProps) => {
  return (
    <section>
      <h2>Expenses:</h2>

      <ul>
        {expenses.map(({ id, label, amount, category }) => (
          <ExpenseListItem
            key={id}
            id={id}
            label={label}
            amount={amount}
            category={category}
            editExpense={editExpense}
            deleteExpense={deleteExpense}
          />
        ))}
      </ul>
    </section>
  );
};
