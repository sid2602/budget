import { TransactionTypes } from "./transactions";
import { CategoryTypes } from "./category";

export type SubCategoriesTypes = {
  id: number;
  name: string;
  expense: boolean;
  category: CategoryTypes[];
  categoryId: number;
  transactions: TransactionTypes[];
  icon: string;
};
