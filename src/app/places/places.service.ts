import { inject, Injectable, signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, map, tap, throwError } from "rxjs";

import { Place } from "./place.model";
import { ErrorService } from "../shared/error.service";

@Injectable({
  providedIn: "root",
})
export class PlacesService {
  private userPlaces = signal<Place[]>([]);
  private httpClient = inject(HttpClient);
  private errorService = inject(ErrorService);

  loadedUserPlaces = this.userPlaces.asReadonly();

  loadAvailablePlaces() {
    return this.fetchPlaces(
      "http://localhost:3000/places",
      "unable to load all the places"
    );
  }

  loadUserPlaces() {
    return this.fetchPlaces(
      "http://localhost:3000/user-places",
      "unable to load your favorite places"
    ).pipe(
      tap({
        next: (userPlaces) => this.userPlaces.set(userPlaces),
      })
    );
  }

  addPlaceToUserPlaces(place: Place) {
    const prevPlaces = this.userPlaces();

    if (!this.userPlaces().some((p) => p.id === place.id)) {
      this.userPlaces.set([...this.userPlaces(), place]);
    } else {
      this.errorService.showError("Already added to fav places");
    }

    return this.httpClient
      .put<Place>("http://localhost:3000/user-places", {
        placeId: place.id,
      })
      .pipe(
        catchError((err) => {
          this.userPlaces.set([...prevPlaces]);
          this.errorService.showError("error adding the place to fav places");
          return throwError(
            () => new Error("error adding the place to fav places")
          );
        })
      );
  }

  removeUserPlace(place: Place) {
    const prevPlaces = this.userPlaces();

    this.userPlaces.set(this.userPlaces().filter((p) => p.id !== place.id));

    return this.httpClient
      .delete(`http://localhost:3000/user-places/${place.id}`)
      .pipe(
        catchError((err) => {
          this.userPlaces.set([...prevPlaces]);
          this.errorService.showError(
            "error deleting the place from fav places"
          );
          return throwError(() => {
            return new Error("error deleting the place from fav places");
          });
        })
      );
  }

  fetchPlaces(url: string, message: string) {
    return this.httpClient.get<{ places: Place[] }>(url).pipe(
      map((response) => response.places),
      catchError((err) => {
        this.errorService.showError(message);
        return throwError(() => {
          new Error(err.message);
        });
      })
    );
  }
}
