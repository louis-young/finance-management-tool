import { calculateTotalExpenses } from "../../utilities/calculateTotalExpenses";
import { ExpenseListItem } from "../ExpenseListItem";
import type { ExpenseListProps } from "./types";

export const ExpenseList = ({
  expenses,
  editExpense,
  deleteExpense,
}: ExpenseListProps) => {
  const totalExpenses = calculateTotalExpenses(expenses);

  return (
    <section className="w-full">
      <h2 className="font-semibold text-2xl mb-6 mt-6">
        Expenses <span className="text-xl">(£{totalExpenses})</span>
      </h2>

      <ul className="flex flex-col gap-4">
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
