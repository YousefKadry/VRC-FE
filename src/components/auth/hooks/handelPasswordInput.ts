import { useState } from 'react';

const handlePasswordInput = () => {
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handlePasswordChange = (newPassword:string) => {
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const validatePassword = (inputPassword:string) => {
    if (inputPassword.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
    } else {
      setPasswordError('');
    }
  };

  return {
    password,
    passwordError,
    handlePasswordChange,
  };
};

export default handlePasswordInput;
