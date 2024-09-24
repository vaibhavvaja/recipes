import { Component } from "@angular/core";
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";

const passwordMatchingValidator = (control1: string, control2: string) => {
  return (control: AbstractControl) => {
    const val1 = control.get(control1)?.value;
    const val2 = control.get(control2)?.value;

    if (val1 !== val2) {
      return { valuesNotMatching: true };
    }
    return null;
  };
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
    passwords: new FormGroup(
      {
        password: new FormControl("", {
          validators: [Validators.required, Validators.minLength(6)],
        }),
        confirmPassword: new FormControl("", {
          validators: [Validators.required, Validators.minLength(6)],
        }),
      },
      {
        validators: [passwordMatchingValidator("password", "confirmPassword")],
      }
    ),
    firstName: new FormControl("", {
      validators: [Validators.required],
    }),
    lastName: new FormControl("", {
      validators: [Validators.required],
    }),
    address: new FormGroup({
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
    }),
    role: new FormControl("", {
      validators: [Validators.required],
    }),
    source: new FormArray([
      new FormControl(false),
      new FormControl(false),
      new FormControl(false),
    ]),
    termsAndCondition: new FormControl(false, {
      validators: [Validators.required],
    }),
  });

  enteredEmail = this.form.controls.email;
  passwords = this.form.controls.passwords;

  get isEmailInvalid() {
    return (
      this.enteredEmail.invalid &&
      this.enteredEmail.dirty &&
      this.enteredEmail.touched
    );
  }

  get isPasswordMatching() {
    return (
      this.passwords.invalid &&
      this.passwords.controls.confirmPassword.dirty &&
      this.passwords.controls.password.dirty &&
      this.passwords.controls.password.touched &&
      this.passwords.controls.confirmPassword.touched
    );
  }

  get isFormInvalid() {
    return this.form.invalid && this.form.touched;
  }

  onSubmit() {
    if (this.form.invalid) {
      this.isFormInvalid;
    }
    console.log(this.form.value);
  }

  onReset() {
    this.form.reset();
  }
}
