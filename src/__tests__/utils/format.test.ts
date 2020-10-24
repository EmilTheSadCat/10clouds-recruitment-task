import { prefixNumberWith0, formatMobilePhoneNumber } from '../../utils/format';

describe('format utils', () => {
    describe('prefixNumberWith0', () => {
        test('should output correct result for n < 10', () => {
            expect(prefixNumberWith0(6)).toBe('06');
        });
        test('should ouput correct result for n > 10', () => {
            expect(prefixNumberWith0(24)).toBe('24');
        });
        test('should ouput correct result for n == 0', () => {
            expect(prefixNumberWith0(0)).toBe('00');
        });
    });

    describe('formatMobilePhoneNumber', () => {
        test('should correctly format 9 characters', () => {
            expect(formatMobilePhoneNumber('123123123')).toBe('123 123 123');
        });

        test('should correctly format preformatted string with 7 digits', () => {
            expect(formatMobilePhoneNumber('123 123 1')).toBe('123 123 1');
        });
    });
});
