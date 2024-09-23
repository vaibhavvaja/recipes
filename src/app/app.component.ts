import { Component, inject } from "@angular/core";

import { AvailablePlacesComponent } from "./places/available-places/available-places.component";
import { UserPlacesComponent } from "./places/user-places/user-places.component";
import { ErrorService } from "./shared/error.service";
import { ErrorModalComponent } from "./shared/modal/error-modal/error-modal.component";

@Component({
  selector: "app-root",
  standalone: false,
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  private errorService = inject(ErrorService);
  error = this.errorService.error;
}
