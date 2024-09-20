import { Component, input, output, signal } from "@angular/core";
import { Ticket } from "../ticket.model";

@Component({
  selector: "app-ticket",
  standalone: true,
  imports: [],
  templateUrl: "./ticket.component.html",
  styleUrl: "./ticket.component.css",
})
export class TicketComponent {
  ticketData = input<Ticket>();
  ticketDetailsVisible = signal(false);
  close = output();

  onToggleVisibility() {
    this.ticketDetailsVisible.update((wasVisible) => !wasVisible);
  }

  onMarkAsCompleted() {
    this.close.emit();
  }
}
