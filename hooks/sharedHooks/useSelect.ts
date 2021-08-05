import { useState, useCallback } from "react";
import { SelectData } from "components/atoms/select/select";

type UsseSelectType = {
  response: {};
};

const useSelect = () => {
  const [selected, setSelected] = useState<SelectData>();

  const handleSelectChange = useCallback((option: SelectData) => {
    setSelected(option);
  }, []);

  return [selected, handleSelectChange] as const;
};

export default useSelect;
