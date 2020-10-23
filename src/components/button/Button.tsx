import React, { SyntheticEvent } from 'react';
import './_button.scss';

export type ButtonProps = {
    handleClick(event: SyntheticEvent): void;
    variant?: string;
    buttonRef?: any;
    additionalClassName?: string;
    disabled?: boolean;
    formSubmitId?: string;
};

const Button: React.FC<ButtonProps> = ({
    handleClick,
    variant = 'default',
    formSubmitId = '',
    additionalClassName = '',
    children,
    buttonRef,
    disabled = false,
}) => {
    return (
        <button
            className={`button button--${variant} ${additionalClassName}`}
            onClick={handleClick}
            role={formSubmitId ? 'submit' : 'button'}
            form={formSubmitId}
            ref={buttonRef}
            disabled={disabled}
        >
            <div className="button__container">{children}</div>
        </button>
    );
};

export default Button;
