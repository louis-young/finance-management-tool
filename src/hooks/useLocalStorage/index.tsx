import { useEffect } from "react";
import { setStoredExpenses } from "../../utilities/localStorage";
import type { Expense } from "../../types/expense";

export const useLocalStorage = (expenses: Expense[]) => {
  useEffect(() => {
    setStoredExpenses(expenses);
  }, [expenses]);
};
