import { Component, ElementRef, viewChild, ViewChild } from "@angular/core";
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-create-ticket",
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: "./create-ticket.component.html",
  styleUrl: "./create-ticket.component.css",
})
export class CreateTicketComponent {
  // @ViewChild("form") form?: ElementRef<HTMLFormElement>;
  form = viewChild.required<ElementRef<HTMLFormElement>>("form");

  onSubmit(title: string, description: string) {
    console.log(title);
    console.log(description);
    console.log(this.form);
    this.form()?.nativeElement.reset();
  }
}
