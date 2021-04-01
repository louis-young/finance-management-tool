import { useReducer } from "react";
import { getStoredExpenses } from "./utilities/localStorage";
import { AddExpenseForm } from "./components/AddExpenseForm";
import { ExpenseActionType } from "./types";
import { ExpenseList } from "./components/ExpenseList";
import type { ExpensesActions } from "./types";
import type { Expense } from "./types/expense";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { calculateTotalExpenses } from "./utilities/calculateTotalExpenses";

const initialExpenses: Expense[] = [];

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

const initialiser = () => {
  const expenses = getStoredExpenses();

  if (!expenses) {
    return initialExpenses;
  }

  return JSON.parse(expenses);
};

export const App = () => {
  const [expenses, dispatch] = useReducer(
    reducer,
    initialExpenses,
    initialiser
  );

  useLocalStorage(expenses);

  const addExpense = (expenseToAdd: Expense) => {
    dispatch({ type: ExpenseActionType.Add, expenseToAdd });
  };

  const editExpense = (expenseToEdit: Expense) => {
    dispatch({ type: ExpenseActionType.Edit, expenseToEdit });
  };

  const deleteExpense = (expenseToDeleteId: string) => {
    dispatch({ type: ExpenseActionType.Delete, expenseToDeleteId });
  };

  const totalExpenses = calculateTotalExpenses(expenses);

  return (
    <section>
      <h1>Finances</h1>

      <AddExpenseForm addExpense={addExpense} />

      <p>Total: {totalExpenses}</p>

      <ExpenseList
        expenses={expenses}
        editExpense={editExpense}
        deleteExpense={deleteExpense}
      />
    </section>
  );
};
