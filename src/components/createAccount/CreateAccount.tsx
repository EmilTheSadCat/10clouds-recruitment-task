import React, { useState } from 'react';

import StepIndicator from '../stepIndicator/StepIndicator';
import './_createAccount.scss';

const createAccountSteps = ['A', 'Personal', 'C'];

const CreateAccount: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(2);

    return (
        <section className="create-account">
            <h3 className="create-account__title">Your Account</h3>
            <div className="create-account__wrapper">
                <div className="create-account-step create-account-step--2">
                    <div className="create-account-step__visual"></div>
                    <div className="create-account-step__content"></div>
                </div>
                <StepIndicator currentStep={currentStep} totalSteps={createAccountSteps} />
            </div>
        </section>
    );
};

export default CreateAccount;
