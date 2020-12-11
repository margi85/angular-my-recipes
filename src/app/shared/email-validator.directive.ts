import { Directive } from '@angular/core';
import { Validator } from '@angular/forms';
import { AbstractControl, ValidationErrors, NG_VALIDATORS} from '@angular/forms';
import { emailValidator } from './validators';

@Directive({
  selector: '[ngModel][appEmailValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: EmailValidatorDirective
    }
  ]
})
export class EmailValidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    return emailValidator(control);
  }

}
