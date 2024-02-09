const handelButtonClick = (handelers: object[], onclick: () => void) => {
    const hasErrors = () => {
        let hasError = false;
        handelers.forEach((handeler: object) => {
            const handelmethod: (value: string) => void = Object.values(handeler)[2];
            const value: string = Object.values(handeler)[0];
            const error: string = Object.values(handeler)[1];
            if (value === '' || error !== '') {
                handelmethod(value);
                hasError = true;
            }
        });
        return hasError;
    };

    const handleClick = () => {
        if (!hasErrors()) {
            onclick();
        } else console.log('error');
    };

    return handleClick;
};

export default handelButtonClick;
