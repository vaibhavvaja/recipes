import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { InvestmentResultsService } from "../investment-results/investment-results.service";

@Component({
  selector: "app-user-input",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./user-input.component.html",
  styleUrl: "./user-input.component.css",
})
export class UserInputComponent {
  initialInvestment = 0;
  annualInvestment = 0;
  expectedReturn = 0;
  duration = 0;

  constructor(private investmentResultService: InvestmentResultsService) {}

  onCalculate() {
    this.investmentResultService.calculateInvestmentResults({
      initialInvestment: this.initialInvestment,
      annualInvestment: this.annualInvestment,
      expectedReturn: this.expectedReturn,
      duration: this.duration,
    });
  }
}
