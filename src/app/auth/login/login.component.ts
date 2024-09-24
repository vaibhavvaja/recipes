import { Component } from "@angular/core";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from "@angular/forms";
import { of } from "rxjs";

const questionMarkValidator = (control: AbstractControl) => {
  if (control.value.includes("?")) {
    return null;
  }
  return { doesIncludeQuestionMark: false };
};

const existingEmailValidator = (control: AbstractControl) => {
  if (control.value !== "test@test.com") {
    return of(null);
  }
  return of({ existingEmail: true });
};

@Component({
  selector: "app-login",
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.css",
})
export class LoginComponent {
  form = new FormGroup({
    email: new FormControl("", {
      validators: [Validators.email, Validators.required],
      asyncValidators: [existingEmailValidator],
    }),
    password: new FormControl("", {
      validators: [
        Validators.required,
        Validators.minLength(6),
        questionMarkValidator,
      ],
    }),
  });

  onSubmit() {
    if (this.form.valid) {
      console.log(
        this.form.controls.email.value,
        this.form.controls.password.value
      );
    }
  }

  get isEmailInvalid() {
    return (
      this.form.controls.email.dirty &&
      this.form.controls.email.touched &&
      this.form.controls.email.invalid
    );
  }

  get isPasswordInvalid() {
    return (
      this.form.controls.password.dirty &&
      this.form.controls.password.touched &&
      this.form.controls.password.invalid
    );
  }
}
