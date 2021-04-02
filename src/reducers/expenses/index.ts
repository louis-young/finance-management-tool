import { Expense } from "../../types/expense";
import { getStoredExpenses } from "../../utilities/localStorage";
import { ExpenseActionType } from "./types";
import type { ExpensesActions } from "./types";

export const initialExpenses: Expense[] = [
  {
    label: "Cinema",
    amount: 50,
    category: "Leisure",
    id: "8de73688-bfb5-48c8-a64f-bb086ed7c6af",
  },
  {
    label: "Insurance",
    amount: 500,
    category: "Bills",
    id: "785ae0d0-2106-4d94-ad83-f58cb3638d5a",
  },
  {
    label: "Food",
    amount: 150,
    category: "Shopping",
    id: "1877d1d6-f92d-488b-bbca-32d46d68e5a9",
  },
  {
    label: "Tax",
    amount: 200,
    category: "Bills",
    id: "6f0a523c-6041-4a28-9ea9-4ff1f7423e41",
  },
  {
    label: "Football",
    amount: 100,
    category: "Leisure",
    id: "574ca36c-cca0-4cdd-a89a-8aa554773932",
  },
  {
    label: "Golf",
    amount: 75,
    category: "Leisure",
    id: "b16a3fed-2ca7-4d0f-ac88-6b3754e42b1b",
  },
  {
    label: "Fuel",
    amount: 100,
    category: "Bills",
    id: "c453c29a-2d2c-4037-b38e-b2739212ed23",
  },
  {
    label: "Clothes",
    amount: 50,
    category: "Shopping",
    id: "f92ffa67-ef68-47db-bbe4-36a87cf25b3a",
  },
];

export const initialiser = () => {
  const expenses = getStoredExpenses();

  if (!expenses) {
    return initialExpenses;
  }

  return JSON.parse(expenses);
};

export const reducer = (expenses: Expense[], action: ExpensesActions) => {
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
