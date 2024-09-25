import { Component, Input } from "@angular/core";

import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: "app-user-tasks",
  standalone: true,
  templateUrl: "./user-tasks.component.html",
  styleUrl: "./user-tasks.component.css",
  imports: [RouterOutlet, RouterLink],
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

  // usersService = inject(UsersService);
  // userId = input.required<string>();
  // user = computed(
  //   () => this.usersService.users.find((u) => u.id === this.userId())?.name
  // );

  @Input({ required: true }) message = "";
  @Input({ required: true }) user = "";
}
