import { Injectable } from "@angular/core";

import { InvestmentData } from "../investmentData.model";

@Injectable({ providedIn: "root" })
export class InvestmentResultsService {
  calculateInvestmentResults(investmentData: InvestmentData) {
    const annualData = [];
    let investmentValue = investmentData.initialInvestment;
    for (let i = 0; i < investmentData.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear =
        investmentValue * (investmentData.expectedReturn / 100);
      investmentValue += interestEarnedInYear + investmentData.annualInvestment;
      const totalInterest =
        investmentValue -
        investmentData.annualInvestment * year -
        investmentData.initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: investmentData.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested:
          investmentData.initialInvestment +
          investmentData.annualInvestment * year,
      });
    }
    return annualData;
  }
}
