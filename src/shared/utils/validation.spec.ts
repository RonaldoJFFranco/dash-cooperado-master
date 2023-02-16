import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { isValidCpf } from './validation';

describe('Utils', () => {
    const isValid = isValidCpf();


    it('should call isValidCpf with a valid one', () => {
        const control = { value: '66755873071' };
        expect(isValid(control as AbstractControl)).toBeFalse();
    });

    it('should call isValidCpf with a invalid one', () => {
        const control = { value: '11111111111' };
        expect(isValid(control as AbstractControl)).toEqual({ cpfNotValid: true });
    });

    it('should call isValidCpf with less than 11 digits', () => {
        const control = { value: '667558' };
        expect(isValid(control as AbstractControl)).toBeFalse();
    });

    

})