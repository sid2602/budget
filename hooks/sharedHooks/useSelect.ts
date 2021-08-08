import { useState, useCallback } from "react";
import { SelectData } from "components/atoms/select/select";

const useSelect = (resetFunction?: () => void) => {
  const [selected, setSelected] = useState<SelectData>();

  const handleSelectChange = useCallback((option: SelectData | undefined) => {
    setSelected(option);
    if (resetFunction) resetFunction();
  }, []);

  return [selected, handleSelectChange] as const;
};

export default useSelect;
