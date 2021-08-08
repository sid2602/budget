import { useState, useEffect, useMemo, useCallback } from "react";
import { SelectData } from "components/atoms/select/select";
import { CategoryWithSubcategories } from "types/category";
import useSelect from "hooks/sharedHooks/useSelect";
import { ShortTransactionTypes } from "types/transactions";
import axios from "axios";

const useHistory = (
  transactions: ShortTransactionTypes[],
  categories: CategoryWithSubcategories[]
) => {
  const resetSubcategories = () => {
    handleSelectSubCategory(undefined);
  };

  const [filteredTransactions, setFilteredTransactions] = useState(
    transactions
  );

  const [selectedCategory, handleSelectCategory] = useSelect(
    resetSubcategories
  );
  const [allcategories, setAllCategories] = useState<SelectData[]>([]);

  const [selectedSubCategory, handleSelectSubCategory] = useSelect();
  const [allSubCategories, setAllSubCategoriess] = useState<SelectData[]>([]);

  const allOption = useMemo(() => {
    return { label: "Wszystkie", value: "all" };
  }, []);

  const handleFilterBtnClick = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:3000/api/transactions?category=${selectedCategory?.value}&subCategory=${selectedSubCategory?.value}`
      );
      setFilteredTransactions(data);
    } catch (e) {
      console.log(e.response, "hande filter button click error");
    }
  }, [selectedCategory, selectedSubCategory]);

  useEffect(() => {
    const getSubCategories = () => {
      const indexOfActiveCategory = categories.findIndex(
        (category) => category.name === selectedCategory?.value
      );

      if (indexOfActiveCategory > -1) {
        const subCategories = categories[indexOfActiveCategory].subcategories;

        const convertedSubCategories: SelectData[] = subCategories.map(
          ({ name }) => {
            return { value: name, label: name };
          }
        );
        setAllSubCategoriess([allOption, ...convertedSubCategories]);
      }
    };
    getSubCategories();
  }, [selectedCategory]);

  useEffect(() => {
    const convertedCategories = categories.map(({ name }) => {
      return { value: name, label: name };
    });
    setAllCategories([allOption, ...convertedCategories]);
  }, []);

  return {
    filteredTransactions,
    selectedCategory,
    allcategories,
    selectedSubCategory,
    allSubCategories,
    handleSelectCategory,
    handleSelectSubCategory,
    handleFilterBtnClick,
  };
};

export default useHistory;
