import { Component } from "@angular/core";
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";

@Component({
  selector: "app-create-ticket",
  standalone: true,
  imports: [ButtonComponent, ControlComponent],
  templateUrl: "./create-ticket.component.html",
  styleUrl: "./create-ticket.component.css",
})
export class CreateTicketComponent {}
