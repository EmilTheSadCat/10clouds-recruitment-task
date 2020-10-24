import {
    ErrorMessage,
    validateNameInput,
    validatePhoneNumberInput,
    validateBirthDateInput,
    validateIfOptionSelected,
} from '../../utils/validation';

describe('validation functions', () => {
    describe('validateNameInput', () => {
        test('should output TOO_SHORT error message for n.length < 3 ', () => {
            expect(validateNameInput('')).toBe(ErrorMessage.TOO_SHORT);
            expect(validateNameInput('qw')).toBe(ErrorMessage.TOO_SHORT);
        });
        test('should output no error for n.length >= 3 ', () => {
            expect(validateNameInput('abc')).toBe('');
            expect(validateNameInput('abcdefghij')).toBe('');
        });
    });

    describe('validatePhoneNumberInput', () => {
        test('should output INVALID_PHONE_NUMBER error message for n.length !== 9 ', () => {
            expect(validatePhoneNumberInput('123 123 12')).toBe(ErrorMessage.INVALID_PHONE_NUMBER);
            expect(validatePhoneNumberInput('123123')).toBe(ErrorMessage.INVALID_PHONE_NUMBER);
            expect(validatePhoneNumberInput('123123123123123 123 123 123 ')).toBe(ErrorMessage.INVALID_PHONE_NUMBER);
            expect(validatePhoneNumberInput('')).toBe(ErrorMessage.INVALID_PHONE_NUMBER);
        });
        test('should output no error message for n.length === 9 ', () => {
            expect(validatePhoneNumberInput('123 123 121')).toBe('');
            expect(validatePhoneNumberInput('123123121')).toBe('');
        });
    });

    describe('validateBirthDateInput', () => {
        test('should output TOO_YOUNG error message for date in past 18 years', () => {
            expect(validateBirthDateInput('1', '1', '2008')).toBe(ErrorMessage.TOO_YOUNG);
            expect(validateBirthDateInput('1', '1', '2020')).toBe(ErrorMessage.TOO_YOUNG);
        });
        test('should output no error message for date in over 18 years ago', () => {
            expect(validateBirthDateInput('1', '1', '2000')).toBe('');
            expect(validateBirthDateInput('1', '1', '1984')).toBe('');
            expect(validateBirthDateInput('1', '1', '1750')).toBe('');
        });
    });

    describe('validateIfOptionSelected', () => {
        test('should ouput NOT_SELECTED error message when not selected', () => {
            expect(validateIfOptionSelected('')).toBe(ErrorMessage.NOT_SELECTED);
        });
        test('should ouput no error when selected', () => {
            expect(validateIfOptionSelected('abc')).toBe('');
        });
    });
});
