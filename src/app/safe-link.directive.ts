import { Directive } from "@angular/core";

@Directive({
  selector: "a[appSafeLink]",
  standalone: true,
  host: {
    "(click)": "onClick($event)",
  },
})
export class SafeLinkDirective {
  constructor() {}

  onClick(event: MouseEvent) {
    const wantsToLeave = window.confirm(
      "do you want to navigate to different website?"
    );

    if (wantsToLeave) return;

    event.preventDefault();
  }
}
