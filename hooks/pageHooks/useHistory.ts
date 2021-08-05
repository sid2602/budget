import { useState, useEffect, useCallback } from "react";
import { SelectData } from "components/atoms/select/select";
import { CategoryWithSubcategories } from "types/category";
import useSelect from "hooks/sharedHooks/useSelect";
const useHistory = (categories: CategoryWithSubcategories[]) => {
  const [selectedCategory, handleSelectCategory] = useSelect();
  const [allcategories, setAllCategories] = useState<SelectData[]>([]);

  const [selectedSubCategory, handleSelectSubCategory] = useSelect();
  const [allSubCategories, setAllSubCategoriess] = useState<SelectData[]>([]);

  useEffect(() => {
    const getSubCategories = () => {
      const indexOfActiveCategory = categories.findIndex(
        (category) => category.name === selectedCategory?.value
      );

      const subCategories = categories[indexOfActiveCategory]?.subcategories;

      const convertedSubCategories = subCategories?.map(({ name }) => {
        return { value: name, label: name };
      });
      setAllSubCategoriess(convertedSubCategories);
    };
    getSubCategories();
  }, [selectedCategory]);

  useEffect(() => {
    const convertedCategories = categories.map(({ name }) => {
      return { value: name, label: name };
    });
    setAllCategories(convertedCategories);
  }, []);

  return {
    selectedCategory,
    allcategories,
    selectedSubCategory,
    allSubCategories,
    handleSelectCategory,
    handleSelectSubCategory,
  };
};

export default useHistory;
