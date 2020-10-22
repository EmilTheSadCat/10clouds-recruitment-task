import React from 'react';

import './_stepIndicator.scss';

type StepIndicatorProps = {
    currentStep: number;
    totalSteps: string[];
};

const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep, totalSteps }) => {
    return (
        <div className="step-indicator">
            {totalSteps.map((step, index) => {
                const isActive = currentStep - 1 === index;
                const activeClass = isActive ? 'active' : '';
                return (
                    <div className="step-indicator__element" key={index}>
                        <span className={`step-indicator__bar ${activeClass}`}></span>
                        {isActive && <span className="step-indicator__title">{step}</span>}
                    </div>
                );
            })}
        </div>
    );
};

export default StepIndicator;
