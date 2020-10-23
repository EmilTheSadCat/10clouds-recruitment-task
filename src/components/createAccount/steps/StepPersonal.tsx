import React from 'react';
import './_createAccountStep.scss';
import { CreateAccountStepProps } from '.';
import StepButton from '../../button/StepButton';
import Form from '../../createAccountForm/CreateAccountForm';

const StepPersonal: React.FC<CreateAccountStepProps> = ({ handleNext }) => {
    return (
        <>
            <div className="create-account-step__visual"></div>
            <div className="create-account-step__content">
                <p className="create-account-step__description">
                    Provide personal information so that we can create a new account for you.
                </p>
                <Form handleNext={handleNext} />
                <StepButton handleClick={() => {}} formSubmitId="createAccountForm" />
            </div>
        </>
    );
};

export default StepPersonal;
