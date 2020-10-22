import React from 'react';
import './_createAccountStep.scss';
import { CreateAccountStepProps } from '.';
import StepButton from '../../button/StepButton';

const StepThird: React.FC<CreateAccountStepProps> = ({ handleNext }) => {
    return (
        <>
            <span style={{ fontSize: '36px', opacity: '.5' }}>Step 3</span>
            <StepButton handleClick={handleNext} />
        </>
    );
};

export default StepThird;
