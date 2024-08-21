import { Component, Input, input, computed } from "@angular/core";
import { CommonModule } from "@angular/common";
@Component({
  selector: "app-user",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./user.component.html",
  styleUrl: "./user.component.css",
})
export class UserComponent {
  //same thing using signal
  // name = input.required<string>();
  // avatar = input.required<string>();
  // imagePath = computed(() => "assets/users/" + this.avatar());

  @Input({ required: true }) name!: string;
  @Input({ required: true }) avatar!: string;

  get imagePath() {
    return "assets/users/" + this.avatar;
  }
  onSelectUser() {}
}
