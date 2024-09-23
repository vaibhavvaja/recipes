import {
  Component,
  computed,
  DestroyRef,
  inject,
  OnInit,
  signal,
} from "@angular/core";

import { PlacesService } from "../places.service";
import { Place } from "../place.model";

@Component({
  selector: "app-user-places",
  standalone: false,
  templateUrl: "./user-places.component.html",
  styleUrl: "./user-places.component.css",
})
export class UserPlacesComponent implements OnInit {
  isFetching = signal(false);
  private destroyRef = inject(DestroyRef);
  private placesService = inject(PlacesService);
  places = this.placesService.loadedUserPlaces;
  isEmpty = computed(() => {
    return this.places().length === 0;
  });

  ngOnInit() {
    this.isFetching.set(true);
    const subscription = this.placesService.loadUserPlaces().subscribe({
      complete: () => {
        this.isFetching.set(false);
      },
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });

    console.log(this.isEmpty());
  }

  onDeletePlace(place: Place) {
    const subscription = this.placesService.removeUserPlace(place).subscribe();

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
