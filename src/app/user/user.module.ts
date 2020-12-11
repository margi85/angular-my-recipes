import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { LoaderComponent } from '../shared/loader/loader.component';
import { SharedModule } from '../shared/shared.module';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoreModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
