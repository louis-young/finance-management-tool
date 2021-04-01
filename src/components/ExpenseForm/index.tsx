import { expenseCategories } from "../../constants/expenseCategories";
import { ExpenseFormProps } from "./types";

export const ExpenseForm = ({
  label,
  setLabel,
  amount,
  setAmount,
  category,
  setCategory,
  handleSubmit,
  handleCancel,
}: ExpenseFormProps) => {
  const isEditing = handleCancel;

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="expense">
        Expense:
        <input
          type="text"
          id="expense"
          value={label}
          onChange={(event) => setLabel(event.target.value)}
          required
        />
      </label>

      <label htmlFor="amount">
        Amount:
        <input
          type="number"
          id="amount"
          min={0}
          value={amount}
          onChange={(event) => setAmount(event.target.valueAsNumber)}
          required
        />
      </label>

      <label htmlFor="category">
        Category:
        <select
          id="category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          required
        >
          {!isEditing && <option value="">Select a category...</option>}

          {expenseCategories.map((expenseCategory) => {
            const isSelected = expenseCategory === category;

            return (
              <option
                key={expenseCategory}
                value={expenseCategory}
                selected={isSelected}
              >
                {expenseCategory}
              </option>
            );
          })}
        </select>
      </label>

      <button type="submit">Submit</button>

      {isEditing && <button onClick={handleCancel}>Cancel</button>}
    </form>
  );
};
