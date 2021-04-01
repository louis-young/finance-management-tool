import type { Dispatch, FormEvent, SetStateAction } from "react";

export interface ExpenseFormProps {
  label: string;
  setLabel: Dispatch<SetStateAction<string>>;
  amount: number;
  setAmount: Dispatch<SetStateAction<number>>;
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  handleCancel?: () => void;
}
