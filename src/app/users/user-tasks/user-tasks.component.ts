import {
  Component,
  computed,
  inject,
  input,
  Input,
  OnInit,
} from "@angular/core";

import { UsersService } from "../users.service";
import { HttpParams } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-user-tasks",
  standalone: true,
  templateUrl: "./user-tasks.component.html",
  styleUrl: "./user-tasks.component.css",
})
export class UserTasksComponent {
  // user = "";

  // constructor(
  //   private usersService: UsersService,
  //   private activatedRoute: ActivatedRoute
  // ) {}

  // ngOnInit() {
  //   this.activatedRoute.paramMap.subscribe({
  //     next: (val) => {
  //       this.user =
  //         this.usersService.users.find((u) => u.id === val.get("userId"))
  //           ?.name ?? "";
  //     },
  //   });
  // }

  userId = input.required<string>();
  usersService = inject(UsersService);

  user = computed(
    () => this.usersService.users.find((u) => u.id === this.userId())?.name
  );
}
