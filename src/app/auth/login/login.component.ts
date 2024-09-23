import {
  afterNextRender,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";
import { debounceTime, Subscription } from "rxjs";

@Component({
  selector: "app-login",
  standalone: true,
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.css",
  imports: [FormsModule],
})
export class LoginComponent implements OnDestroy {
  @ViewChild("form") private form!: NgForm;
  private subscription?: Subscription;

  constructor() {
    afterNextRender(() => {
      const savedForm = window.sessionStorage.getItem("login-saved-info");
      if (savedForm) {
        const loadedForm = JSON.parse(savedForm);
        const savedEmail = loadedForm.email;
        setTimeout(() => {
          this.form.controls["email"].setValue(savedEmail);
        }, 1);
      }

      this.subscription = this.form.valueChanges
        ?.pipe(debounceTime(500))
        .subscribe({
          next: (val) =>
            window.sessionStorage.setItem(
              "login-saved-info",
              JSON.stringify({ email: val.email })
            ),
        });
    });
  }

  onSubmit(formData: NgForm) {
    if (formData.invalid) return;

    const enteredEmail = formData.form.value.email;
    const enteredPassword = formData.form.value.password;

    console.log(enteredEmail, enteredPassword);
    window.sessionStorage.setItem("email", enteredEmail);

    formData.reset();
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
