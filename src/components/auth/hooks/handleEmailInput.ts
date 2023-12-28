import { useState } from 'react';

const handelEmailInput = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = (newEmail:string) => {
    setEmail(newEmail);
    validateEmail(newEmail);
  };

  const validateEmail = (inputEmail: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (inputEmail === '') {
      setEmailError('Email is required');
    } else if (!emailRegex.test(inputEmail)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };

  return {
    email,
    emailError,
    handleEmailChange,
  };
};

export default handelEmailInput;
