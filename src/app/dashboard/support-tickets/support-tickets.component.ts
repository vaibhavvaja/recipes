import { Component } from "@angular/core";
import { CreateTicketComponent } from "./create-ticket/create-ticket.component";

@Component({
  selector: "app-support-tickets",
  standalone: true,
  imports: [CreateTicketComponent],
  templateUrl: "./support-tickets.component.html",
  styleUrl: "./support-tickets.component.css",
})
export class SupportTicketsComponent {}
