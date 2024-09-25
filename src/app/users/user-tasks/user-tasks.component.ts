import { Component, Input, OnInit } from "@angular/core";

import { UsersService } from "../users.service";
import { HttpParams } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-user-tasks",
  standalone: true,
  templateUrl: "./user-tasks.component.html",
  styleUrl: "./user-tasks.component.css",
})
export class UserTasksComponent implements OnInit {
  user = "";

  constructor(
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe({
      next: (val) => {
        this.user =
          this.usersService.users.find((u) => u.id === val.get("userId"))
            ?.name ?? "";
      },
    });
  }
}
