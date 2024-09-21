import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "temp",
  standalone: true,
})
export class TemperaturePipe implements PipeTransform {
  transform(
    value: number | null,
    input: "cel" | "fah",
    output?: "cel" | "fah"
  ) {
    if (!value) return;

    const val =
      output === "fah"
        ? value * (5 / 9) + 32
        : output === "cel"
        ? value - 32 * (9 / 5)
        : value;

    const symbol =
      output === "cel"
        ? "°C"
        : output === "fah"
        ? "°F"
        : input === "cel"
        ? "°C"
        : "°F";
    return val.toFixed(2) + `${symbol}`;
  }
}
