import React from 'react';
import './_createAccountStep.scss';
import { CreateAccountStepProps } from '.';
import StepButton from '../../button/StepButton';

const StepFirst: React.FC<CreateAccountStepProps> = ({ handleNext }) => {
    return (
        <>
            <span style={{ fontSize: '36px', opacity: '.5' }}>Step 1</span>
            <StepButton handleClick={handleNext} />
        </>
    );
};

export default StepFirst;
