import { Component, computed } from "@angular/core";

import { InvestmentResultsService } from "./investment-results.service";

@Component({
  selector: "app-investment-results",
  templateUrl: "./investment-results.component.html",
  styleUrl: "./investment-results.component.css",
})
export class InvestmentResultsComponent {
  constructor(private investmentResultService: InvestmentResultsService) {}
  results = computed(() => this.investmentResultService.results());
}
