import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { PlacesModule } from "./places/places.module";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    PlacesModule,
    SharedModule,
    BrowserModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
