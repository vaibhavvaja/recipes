import { Component } from "@angular/core";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";

const passwordMatchingValidator = (control: AbstractControl) => {
  const formGroup = control.parent;
  if (!formGroup) return { someError: true };

  const prevEnteredPassword = formGroup.get("password")?.value;
  if (prevEnteredPassword !== control.value) {
    return { passwordsNotMatching: true };
  }
  return null;
};

@Component({
  selector: "app-signup",
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: "./signup.component.html",
  styleUrl: "./signup.component.css",
})
export class SignupComponent {
  form = new FormGroup({
    email: new FormControl("", {
      validators: [Validators.email, Validators.required],
    }),
    password: new FormControl("", {
      validators: [Validators.required, Validators.minLength(6)],
    }),
    confirmPassword: new FormControl("", {
      validators: [Validators.required, passwordMatchingValidator],
    }),
    firstName: new FormControl("", {
      validators: [Validators.required],
    }),
    lastName: new FormControl("", {
      validators: [Validators.required],
    }),
    street: new FormControl("", {
      validators: [Validators.required],
    }),
    number: new FormControl("", {
      validators: [Validators.required],
    }),
    postCode: new FormControl("", {
      validators: [Validators.required],
    }),
    city: new FormControl("", {
      validators: [Validators.required],
    }),
    role: new FormControl("", {
      validators: [Validators.required],
    }),
    google: new FormControl("", {
      validators: [],
    }),
    friend: new FormControl("", {
      validators: [],
    }),
    other: new FormControl("", {
      validators: [],
    }),
    termsAndCondition: new FormControl("", {
      validators: [Validators.required],
    }),
  });

  enteredEmail = this.form.controls.email;
  enteredPassword = this.form.controls.password;
  confirmPassword = this.form.controls.confirmPassword;

  get isEmailInvalid() {
    return (
      this.enteredEmail.invalid &&
      this.enteredEmail.dirty &&
      this.enteredEmail.touched
    );
  }

  get isPasswordInvalid() {
    return (
      this.enteredPassword.invalid &&
      this.enteredPassword.dirty &&
      this.enteredPassword.touched
    );
  }

  get isPasswordMatching() {
    return (
      this.confirmPassword.invalid &&
      this.confirmPassword.dirty &&
      this.confirmPassword.touched
    );
  }

  onSubmit() {
    if (this.form.invalid) return;

    console.log(this.form.controls);
  }

  onReset() {
    this.form.reset();
  }
}
