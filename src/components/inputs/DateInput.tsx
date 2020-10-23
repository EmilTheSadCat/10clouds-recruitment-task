import React from 'react';
import { useWindowWidth } from '../../utils/customHooks';
import { formatMobilePhoneNumber, prefixNumberWith0 } from '../../utils/format';
import './_inputs.scss';

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

type DateInputProps = {
    label: string;
    day: string;
    month: string;
    year: string;
    onChange({}: { name: string; value: string }): void;
    additionalClassName?: string;
};

const DateInput: React.FC<DateInputProps> = ({
    label,
    day,
    month,
    year,
    onChange,
    additionalClassName = '',
}) => {
    const [width] = useWindowWidth();
    const isDesktop = width >= 992;

    return (
        <div className={`date-input ${additionalClassName}`}>
            <label className="label">{label}</label>
            <div className="date-input__container">
                <input
                    type="number"
                    name="birthDateDay"
                    value={prefixNumberWith0(Number(day))}
                    min="1"
                    max="31"
                    onChange={(e) => onChange(e.target)}
                    className="date-input__day"
                />
                <span />
                <select
                    name="birthDateMonth"
                    id=""
                    value={month}
                    onChange={(e) => onChange(e.target)}
                    className="date-input__month select-input"
                >
                    {months.map((month, index) => (
                        <option value={index + 1} key={index + 1}>
                            {isDesktop ? month : prefixNumberWith0(index + 1)}
                        </option>
                    ))}
                </select>
                <span />
                <input
                    type="number"
                    name="birthDateYear"
                    value={year}
                    min="1920"
                    max={new Date().getFullYear().toString()}
                    onChange={(e) => onChange(e.target)}
                    className="date-input__year"
                />
            </div>
        </div>
    );
};

export default DateInput;
