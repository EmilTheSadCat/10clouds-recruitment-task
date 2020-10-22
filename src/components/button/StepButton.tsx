import React from 'react';
import Button, { ButtonProps } from './Button';

type StepButtonProps = {
    text?: string;
    iconPath?: string;
    iconAlt?: string;
} & ButtonProps;

const StepButton: React.FC<StepButtonProps> = ({
    children,
    text = 'Continue',
    iconPath = 'arrow-right.svg',
    iconAlt = 'Arrow Right',
    ...props
}) => {
    return (
        <Button {...props}>
            <div className="step-button">
                <div className="step-button__left">
                    <span>{text}</span>
                </div>
                <div className="step-button__right">
                    <img src={process.env.PUBLIC_URL + `/img/${iconPath}`} alt={iconAlt} />
                </div>
            </div>
        </Button>
    );
};

export default StepButton;
