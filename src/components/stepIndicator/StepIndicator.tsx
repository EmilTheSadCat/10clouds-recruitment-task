import React from 'react';

import { prefixNumberWith0 } from '../../utils/format';
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
                        <span className="step-indicator__step-number">
                            {prefixNumberWith0(index + 1)}
                        </span>
                        <span className={`step-indicator__title ${activeClass}`}>{step}</span>
                    </div>
                );
            })}
        </div>
    );
};

export default StepIndicator;
