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
          <li key={id}>
            Label: {label}
            <br />
            Amount: {amount}
            <br />
            Category: {category}
            <br />
            <button>Edit</button>
            <button onClick={() => deleteExpense(id)}>Delete</button>
          </li>
        ))}
      </ul>
    </section>
  );
};
