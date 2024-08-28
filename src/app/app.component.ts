import { Component } from "@angular/core";

import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { ReturnsData } from "./returnsData.model";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  returnsData: ReturnsData[] = [];

  onCalculation(annualData: ReturnsData[]) {
    this.returnsData = annualData;
  }
}
