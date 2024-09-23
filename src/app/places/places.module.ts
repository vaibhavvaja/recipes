import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PlacesComponent } from "./places.component";
import { PlacesContainerComponent } from "./places-container/places-container.component";
import { AvailablePlacesComponent } from "./available-places/available-places.component";
import { UserPlacesComponent } from "./user-places/user-places.component";

@NgModule({
  declarations: [
    PlacesComponent,
    PlacesContainerComponent,
    AvailablePlacesComponent,
    UserPlacesComponent,
  ],
  imports: [CommonModule],
  exports: [
    PlacesComponent,
    PlacesContainerComponent,
    AvailablePlacesComponent,
    UserPlacesComponent,
  ],
})
export class PlacesModule {}
