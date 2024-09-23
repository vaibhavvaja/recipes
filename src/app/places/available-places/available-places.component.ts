import { Component, DestroyRef, inject, OnInit, signal } from "@angular/core";

import { Place } from "../place.model";
import { PlacesService } from "../places.service";

@Component({
  selector: "app-available-places",
  standalone: false,
  templateUrl: "./available-places.component.html",
  styleUrl: "./available-places.component.css",
})
export class AvailablePlacesComponent implements OnInit {
  places = signal<Place[] | undefined>(undefined);
  isFetching = signal(false);
  private destroyRef = inject(DestroyRef);
  private placesService = inject(PlacesService);

  ngOnInit() {
    this.isFetching.set(true);
    const subscription = this.placesService.loadAvailablePlaces().subscribe({
      next: (places) => {
        this.places.set(places);
      },
      error: (err) => {
        console.log(err.message);
      },
      complete: () => {
        this.isFetching.set(false);
      },
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  onSelectPlace(place: Place) {
    const subscription = this.placesService
      .addPlaceToUserPlaces(place)
      .subscribe({
        next: (places) => {
          console.log(places);
        },
        error: (err) => {},
      });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
