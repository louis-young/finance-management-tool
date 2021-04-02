import { categories } from "../../constants/categories";
import { ExpenseFormProps } from "./types";
import styles from "./styles.module.css";
import { Button } from "../Button";
import { ButtonStyle } from "../../types/buttonStyle";

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
  const isEditing = Boolean(handleCancel);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="expense" className={styles.label}>
        Expense:
        <input
          type="text"
          id="expense"
          className={styles.input}
          value={label}
          onChange={(event) => setLabel(event.target.value)}
          required
        />
      </label>

      <label htmlFor="amount" className={styles.label}>
        Amount:
        <input
          type="number"
          id="amount"
          min={0}
          className={styles.input}
          value={amount}
          onChange={(event) => setAmount(event.target.valueAsNumber)}
          required
        />
      </label>

      <label htmlFor="category" className={styles.label}>
        Category:
        <select
          id="category"
          value={category}
          className={styles.input}
          onChange={(event) => setCategory(event.target.value)}
          required
        >
          {!isEditing && <option value="">Select a category...</option>}

          {categories.map((category) => {
            return (
              <option key={category} value={category}>
                {category}
              </option>
            );
          })}
        </select>
      </label>

      <div className="mt-8 flex gap-4">
        <Button
          style={ButtonStyle.Success}
          type="submit"
          fullWidth={!isEditing}
        >
          {isEditing ? "Save" : "Add"}
        </Button>

        {isEditing && (
          <Button onClick={handleCancel} style={ButtonStyle.Warn} type="button">
            Cancel
          </Button>
        )}
      </div>
    </form>
  );
};
