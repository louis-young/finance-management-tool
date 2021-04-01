import { EXPENSES_LOCAL_STORAGE_KEY } from "./constants";
import type { Expense } from "../../types/expense";

export const getStoredExpenses = () => {
  return localStorage.getItem(EXPENSES_LOCAL_STORAGE_KEY);
};

export const setStoredExpenses = (expenses: Expense[]) => {
  localStorage.setItem(EXPENSES_LOCAL_STORAGE_KEY, JSON.stringify(expenses));
};
