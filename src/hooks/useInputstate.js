import { useState } from "react";

const useInputState = (defaultValue = null) => {
  const [value, setValue] = useState(defaultValue);

  //   const handleChanges = (e) => {
  //     setValue(e.target.value);
  //   };

  const onChange = (e) => {
    setValue(e.target.value);
  };
  //   return [value, handleChanges];
  return {
    value,
    onChange,
  };
};

export default useInputState;
