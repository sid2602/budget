import { CategoryTypes } from "./category";
import { SubCategoriesTypes } from "./subCategories";

export type TransactionTypes = {
  id: number;
  category: CategoryTypes;
  categoryId: number;
  subCategory: SubCategoriesTypes;
  subCategoryId: number;
  date: string;
  createdAt: string;
  updatedAt: string;
  action: number;
  expense: boolean;
  comment: string;
};

export type ShortTransactionTypes = {
  id: number;
  category: {
    name: string;
  };
  categoryId: number;
  subCategory: {
    name: string;
    icon: string;
  };
  subCategoryId: number;
  date: string;
  createdAt: string;
  updatedAt: string;
  action: number;
  expense: boolean;
  comment: string;
};
