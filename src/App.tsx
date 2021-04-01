import { useReducer } from "react";
import { AddExpenseForm } from "./components/AddExpenseForm";
import { ExpenseActionType } from "./types";
import type { ExpensesActions } from "./types";
import type { Expense } from "./types/expense";

const initialExpenses = [
  { label: "Gym", amount: 30, category: "Leisure", id: "0" },
  { label: "Tax", amount: 200, category: "Bills", id: "1" },
];

const reducer = (expenses: Expense[], action: ExpensesActions) => {
  switch (action.type) {
    case ExpenseActionType.Add:
      return [...expenses, action.expenseToAdd];
    case ExpenseActionType.Edit:
      return expenses.map((expense) => {
        if (expense.id !== action.expenseToEdit.id) {
          return expense;
        }

        return action.expenseToEdit;
      });
    case ExpenseActionType.Delete:
      return expenses.filter(
        (expense) => expense.id !== action.expenseToDeleteId
      );
    default:
      return expenses;
  }
};

export const App = () => {
  const [expenses, dispatch] = useReducer(reducer, initialExpenses);

  const addExpense = (expenseToAdd: Expense) => {
    dispatch({ type: ExpenseActionType.Add, expenseToAdd });
  };

  const editExpense = (expenseToEdit: Expense) => {
    dispatch({ type: ExpenseActionType.Edit, expenseToEdit });
  };

  const deleteExpense = (expenseToDeleteId: string) => {
    dispatch({ type: ExpenseActionType.Delete, expenseToDeleteId });
  };

  return (
    <section>
      <h1>Finances</h1>

      <h2>Add Expense: </h2>

      <AddExpenseForm addExpense={addExpense} />

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
