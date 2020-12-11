import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { EmailValidatorDirective } from './email-validator.directive';
import { IsEmptyDirective } from './is-empty.directive';

@NgModule({
  declarations: [
    LoaderComponent,
    EmailValidatorDirective,
    IsEmptyDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderComponent,
    EmailValidatorDirective
  ]
})
export class SharedModule { }
