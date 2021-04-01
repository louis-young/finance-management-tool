import { useReducer } from "react";
import { AddExpenseForm } from "./components/AddExpenseForm";
import { ExpenseActionType } from "./types";
import type { ExpensesActions } from "./types";
import type { Expense } from "./types/expense";
import { ExpenseList } from "./components/ExpenseList";

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

      <AddExpenseForm addExpense={addExpense} />

      <ExpenseList
        expenses={expenses}
        editExpense={editExpense}
        deleteExpense={deleteExpense}
      />
    </section>
  );
};
