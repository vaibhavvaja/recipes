import { Component, Input, Output, EventEmitter } from "@angular/core";

interface User {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: "app-user",
  standalone: true,
  imports: [],
  templateUrl: "./user.component.html",
  styleUrl: "./user.component.css",
})
export class UserComponent {
  //same thing using signal
  // name = input.required<string>();
  // avatar = input.required<string>();
  // imagePath = computed(() => "assets/users/" + this.avatar());
  // select = output<string>();

  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return "assets/users/" + this.user.avatar;
  }
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
