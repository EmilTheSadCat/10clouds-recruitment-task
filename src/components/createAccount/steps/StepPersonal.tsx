import React from 'react';
import './_createAccountStep.scss';
import { CreateAccountStepProps } from '.';
import StepButton from '../../button/StepButton';

const StepPersonal: React.FC<CreateAccountStepProps> = ({ handleNext }) => {
    return (
        <>
            <div className="create-account-step__visual"></div>
            <div className="create-account-step__content">
                <StepButton handleClick={handleNext} />
            </div>
        </>
    );
};

export default StepPersonal;
