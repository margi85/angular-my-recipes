
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { emailValidator, rePasswordValidatorFactory } from 'src/app/shared/validators';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
    ) {
    const passwordlControl = this.fb.control('', [Validators.required, Validators.minLength(4)]);

    this.form = this.fb.group({
      email: ['', [Validators.required, emailValidator]],
      password: passwordlControl,
      rePassword: ['', [Validators.required, Validators.minLength(4), rePasswordValidatorFactory(passwordlControl)]],
    });
   }

  ngOnInit(): void {
  }

  submitHandler(): void {
    const data = this.form.value;

    this.isLoading = true;
    this.userService.register({ email: data.email, password: data.password}).subscribe({
      next: () => {
      this.isLoading = false;
      this.router.navigate(['/login']);
      },
      error: (err) => {
        this.isLoading = false;
        console.log(err);
      }
    });
  }

}
