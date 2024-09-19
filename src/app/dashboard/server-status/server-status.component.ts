import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-server-status",
  standalone: true,
  imports: [],
  templateUrl: "./server-status.component.html",
  styleUrl: "./server-status.component.css",
})
export class ServerStatusComponent implements OnInit {
  currentStatus: "online" | "offline" | "unknown" = "offline";

  constructor() {}

  ngOnInit() {
    setInterval(() => {
      const random = Math.random();

      this.currentStatus =
        random < 0.5 ? "online" : random < 0.9 ? "offline" : "unknown";
    }, 5000);
  }
}
