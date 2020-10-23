import React from 'react';
import './_inputs.scss';

export type RadioInputOptions = {
    value: string;
    label: string;
};

type RadioInputProps = {
    label: string;
    name: string;
    onChange({}: { name: string; value: string }): void;
    options: RadioInputOptions[];
    additionalClassName?: string;
};

const RadioInput: React.FC<RadioInputProps> = ({
    label,
    name,
    onChange,
    options = [],
    additionalClassName = '',
}) => {
    return (
        <div className={`radio-input ${additionalClassName}`}>
            <span className="label">{label}</span>
            <div className="radio-input__container">
                {options.map((option) => (
                    <>
                        <input
                            type="radio"
                            name={name}
                            id={option.label}
                            value={option.value}
                            onChange={(e) => onChange(e.target)}
                        />
                        <label htmlFor={option.label}>
                            <span>{option.value}</span>
                        </label>
                    </>
                ))}
            </div>
        </div>
    );
};

export default RadioInput;
