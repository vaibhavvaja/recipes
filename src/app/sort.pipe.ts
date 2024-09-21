import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sort",
  standalone: true,
})
export class SortPipe implements PipeTransform {
  transform(value: number[], order: "asc" | "desc" = "asc") {
    let sorted = [...value];
    sorted.sort((a, b) => {
      if (order === "asc") return a - b;
      else return b - a;
    });
    return sorted;
  }
}
