import { Component } from "@angular/core";

import { CreateTicketComponent } from "./create-ticket/create-ticket.component";
import { Ticket } from "./ticket.model";
import { TicketComponent } from "./ticket/ticket.component";

@Component({
  selector: "app-support-tickets",
  standalone: true,
  imports: [CreateTicketComponent, TicketComponent],
  templateUrl: "./support-tickets.component.html",
  styleUrl: "./support-tickets.component.css",
})
export class SupportTicketsComponent {
  tickets: Ticket[] = [];

  onAddingTicket(ticketData: { title: string; request: string }) {
    const ticket: Ticket = {
      id: Math.random().toString(),
      title: ticketData.title,
      request: ticketData.request,
      status: "open",
    };

    this.tickets.push(ticket);
  }

  onClose(id: string) {
    this.tickets = this.tickets.map((ticket) => {
      if (ticket.id === id) {
        return { ...ticket, status: "close" };
      }
      return ticket;
    });
  }
}
