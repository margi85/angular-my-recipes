import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function emailValidator(control: AbstractControl): ValidationErrors | null {
  const value = (control.value as string);
  if (!value) { return null; }
  const isValidEmail = /[a-zA-Z0-9\.-_]{4,}@\w+\.(com|bg)$/.test(value);
  return isValidEmail ? null : { emailValidator: true };
}

export function rePasswordValidatorFactory(targetControl: AbstractControl): ValidatorFn {
  return function rePasswordValidator(control: AbstractControl): ValidationErrors | null {
    const areThesame = targetControl.value === control.value;
    return areThesame ? null : { rePasswordValidator: true };
  }
}
