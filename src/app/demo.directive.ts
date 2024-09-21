import { Directive, input, output } from "@angular/core";

@Directive({
  selector: "[appDemo]",
  standalone: true,
  host: {
    "(click)": "onClick()",
  },
})
export class DemoDirective {
  a = input.required<string>();
  b = output<string>();

  onClick() {
    console.log("clicked!!" + this.a());
    this.b.emit("yes sir!!");
  }
}
