import { useState } from 'react';

const handleRequriedInput = (inputName:string) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handlevalueChange = (value:string) => {
    setValue(value);
    validateValue(value);
  };

  const validateValue = (inputvalue:string) => {
    if (inputvalue==='') {
      setError(`${inputName} is required`);
    } else {
      setError('');
    }
  };

  return {
    value,
    error,
    handlevalueChange,
  };
};

export default handleRequriedInput;
