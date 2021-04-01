import { useReducer } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { AddExpenseForm } from "./components/AddExpenseForm";
import { ExpenseList } from "./components/ExpenseList";
import { calculateTotalExpenses } from "./utilities/calculateTotalExpenses";
import { initialExpenses, initialiser, reducer } from "./reducers/expenses";
import { ExpenseActionType } from "./reducers/expenses/types";
import type { Expense } from "./types/expense";

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
