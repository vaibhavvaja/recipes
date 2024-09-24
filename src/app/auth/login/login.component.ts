import { Component, DestroyRef, inject, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { debounceTime, of } from "rxjs";

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
export class LoginComponent implements OnInit {
  destroyRef = inject(DestroyRef);
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

  ngOnInit() {
    const savedLoginInfo = window.sessionStorage.getItem("login-saved-info");
    if (savedLoginInfo) {
      const savedEmail = JSON.parse(savedLoginInfo);
      this.form.controls.email.patchValue(savedEmail.email);
    }

    const subscription = this.form.controls.email.valueChanges
      .pipe(debounceTime(500))
      .subscribe({
        next: (val) =>
          window.sessionStorage.setItem(
            "login-saved-info",
            JSON.stringify({ email: val })
          ),
      });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

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
