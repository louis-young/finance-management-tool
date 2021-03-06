import { formatMonetaryValue } from "../../utilities/expenses";
import { ExpenseListItem } from "../ExpenseListItem";
import type { ExpenseListProps } from "./types";

export const ExpenseList = ({
  expenses,
  totalExpenses,
  editExpense,
  deleteExpense,
}: ExpenseListProps) => {
  return (
    <section className="w-full">
      <h2 className="font-semibold text-3xl mb-6 mt-6">
        Expenses <span>({formatMonetaryValue(totalExpenses)})</span>
      </h2>

      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
