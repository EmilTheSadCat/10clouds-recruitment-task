import React from 'react';
import './_inputs.scss';

type TextInputProps = {
    label: string;
    onChange({}: { name: string; value: string }): void;
    additionalClassName?: string;
};

const TextInput: React.FC<TextInputProps> = ({ onChange, additionalClassName = '', label }) => {
    return (
        <div className={`text-input ${additionalClassName}`}>
            <label className="label" htmlFor="name" style={{ marginBottom: 0 }}>
                {label}
            </label>
            <input
                type="text"
                name="name"
                id="name"
                onChange={(e) => onChange(e.target)}
                className="underlined-input"
            />
        </div>
    );
};

export default TextInput;
