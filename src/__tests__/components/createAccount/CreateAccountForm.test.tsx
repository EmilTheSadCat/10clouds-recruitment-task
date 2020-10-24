import React from 'react';

import '@testing-library/jest-dom';
import { render, cleanup } from '@testing-library/react';

import CreateAccountForm from '../../../components/createAccountForm/CreateAccountForm';

describe('CreateAccountForm', () => {
    afterEach(cleanup);

    test('should render form with all elements', () => {
        const formComponent = <CreateAccountForm handleNext={() => {}} />;

        const { getByTestId } = render(formComponent);
        const form = getByTestId('createAccountForm');
        const nameInput = getByTestId('textInput');
        const phoneNumberInput = getByTestId('phoneNumberInput');
        const radioInput = getByTestId('radioInput');
        const dateInput = getByTestId('dateInput');

        expect(form).toBeInTheDocument();
        expect(nameInput).toBeInTheDocument();
        expect(phoneNumberInput).toBeInTheDocument();
        expect(radioInput).toBeInTheDocument();
        expect(dateInput).toBeInTheDocument();
    });
});
