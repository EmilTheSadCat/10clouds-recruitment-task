import React, { useState } from 'react';
import { Step1, Step2, Step3 } from './steps';

import StepIndicator from '../stepIndicator/StepIndicator';
import './_createAccount.scss';

const createAccountSteps = ['First Step', 'Personal', 'Third Step'];

const CreateAccount: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(2);

    const stepComponents = [Step1, Step2, Step3];
    const Step = stepComponents[currentStep - 1];

    const handleNextStep = () => {
        if (currentStep >= createAccountSteps.length) return;
        setCurrentStep(currentStep + 1);
    };

    return (
        <section className="create-account">
            <h3 className="create-account__title">Your account</h3>
            <div className="create-account__wrapper">
                <div className={`create-account-step create-account-step--${currentStep}`}>
                    <Step handleNext={handleNextStep} />
                </div>
                <StepIndicator currentStep={currentStep} totalSteps={createAccountSteps} />
            </div>
        </section>
    );
};

export default CreateAccount;
