
const handelButtonClick = (errorStates: object, onclick: ()=> void) => {
  

  const handleClick = () => {
    const hasErrors = Object.values(errorStates).some((error) => error);

    if (!hasErrors) {
        onclick()
    }
    else console.log('error')
  };

  return handleClick
  
};

export default handelButtonClick;
