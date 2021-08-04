import { TransactionTypes } from "./transactions";
import { SubCategoriesTypes } from "./subCategories";

export type CategoryTypes = {
  id: number;
  name: string;
  expense: boolean;
  transactions: TransactionTypes[];
  subcategories: SubCategoriesTypes[];
  icon: string;
};

export type CategoryWithSubcategories = {
  id: number;
  name: string;
  expense: boolean;
  subcategories: SubCategoriesTypes[];
  icon: string;
};
