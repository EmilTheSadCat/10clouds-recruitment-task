import React from 'react';

import '@testing-library/jest-dom';
import { render, cleanup } from '@testing-library/react';

import InputError from '../../../components/inputs/InputError';

describe('InputError', () => {
    afterEach(cleanup);

    test('should show error', () => {
        const message = 'Error message';
        const inputErrorElement = <InputError errorMessage={message} />;
        const { getByTestId, getByText } = render(inputErrorElement);
        expect(getByTestId('inputError').classList.contains('active')).toBeTruthy();
        expect(getByText(message)).toBeInTheDocument();
    });

    test('should not show error', () => {
        const inputErrorElement = <InputError errorMessage={''} />;
        const { getByTestId } = render(inputErrorElement);
        expect(getByTestId('inputError').classList.contains('active')).toBeFalsy();
    });
});
