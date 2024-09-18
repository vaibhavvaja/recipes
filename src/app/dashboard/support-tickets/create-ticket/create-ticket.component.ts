import { Component } from "@angular/core";
import { ButtonComponent } from "../../../shared/button/button.component";

@Component({
  selector: "app-create-ticket",
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: "./create-ticket.component.html",
  styleUrl: "./create-ticket.component.css",
})
export class CreateTicketComponent {}
