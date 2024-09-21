import { Component, computed, inject } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthComponent } from "./auth/auth.component";
import { LearningResourcesComponent } from "./learning-resources/learning-resources.component";
import { AuthService } from "./auth/auth.service";
import { Permission } from "./auth/auth.model";

@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
  imports: [AuthComponent, LearningResourcesComponent, CommonModule],
})
export class AppComponent {
  authService = inject(AuthService);

  isAdmin = computed(() => this.authService.activePermission() === "admin");
}
