import { useEffect, useReducer } from "react";
import { AddExpenseForm } from "./components/AddExpenseForm";
import { ExpenseList } from "./components/ExpenseList";
import { initialExpenses, initialiser, reducer } from "./reducers/expenses";
import { ExpensesActionType } from "./reducers/expenses/types";
import { ExpenseChart } from "./components/ExpenseChart";
import { calculateTotalExpenses } from "./utilities/expenses";
import { setStoredExpenses } from "./utilities/localStorage";
import type { Expense } from "./types/expense";

export const App = () => {
  const [expenses, dispatch] = useReducer(
    reducer,
    initialExpenses,
    initialiser
  );

  useEffect(() => {
    setStoredExpenses(expenses);
  }, [expenses]);

  const addExpense = (expenseToAdd: Expense) => {
    dispatch({ type: ExpensesActionType.Add, expenseToAdd });
  };

  const editExpense = (expenseToEdit: Expense) => {
    dispatch({ type: ExpensesActionType.Edit, expenseToEdit });
  };

  const deleteExpense = (expenseToDeleteId: string) => {
    dispatch({ type: ExpensesActionType.Delete, expenseToDeleteId });
  };

  const totalExpenses = calculateTotalExpenses(expenses);

  return (
    <section className="container mx-auto p-6 md:p-12">
      <h1 className="font-bold text-5xl mb-6 md:mb-12">Finances</h1>

      <div className="flex flex-col-reverse gap-6 md:flex-row md:gap-12">
        <ExpenseList
          expenses={expenses}
          totalExpenses={totalExpenses}
          editExpense={editExpense}
          deleteExpense={deleteExpense}
        />

        <div className="w-full">
          <div className="sticky top-12">
            <AddExpenseForm addExpense={addExpense} />

            <ExpenseChart expenses={expenses} totalExpenses={totalExpenses} />
          </div>
        </div>
      </div>
    </section>
  );
};
