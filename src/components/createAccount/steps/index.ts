export { default as Step1 } from './StepFirst';
export { default as Step2 } from './StepPersonal';
export { default as Step3 } from './StepThird';

export type CreateAccountStepProps = {
    handleNext(): void;
};
