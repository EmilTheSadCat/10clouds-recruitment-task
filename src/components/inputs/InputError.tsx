import React from 'react';
import './_inputs.scss';

type InputErrorProps = {
    errorMessage: string;
};

const InputError: React.FC<InputErrorProps> = ({ errorMessage }) => {
    const activeClassName = errorMessage ? 'active' : '';

    return <span className={`input-error ${activeClassName}`}>{errorMessage}</span>;
};

export default InputError;
