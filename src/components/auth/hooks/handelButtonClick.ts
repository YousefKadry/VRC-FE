
const handelButtonClick = (handelers: object[], onclick: ()=> void) => {
  
    const hasErrors = ()=>
    {
      let errors:string[] = []
        handelers.forEach((handeler:object)=>{
            var handelmethod:(value:string)=>void = Object.values(handeler)[2]
            var error:string = Object.values(handeler)[1]
            var value:string = Object.values(handeler)[0]
            errors.push(error)
            handelmethod(value)}
        )
        const hasErrors = errors.some((error) => error);
        return hasErrors
    }

  const handleClick = () => {

    if (!hasErrors()) {
        
        onclick()
    }
    else console.log('error')
  };

  return handleClick
  
};

export default handelButtonClick;
