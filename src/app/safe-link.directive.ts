import { Directive, ElementRef, inject, input } from "@angular/core";

@Directive({
  selector: "a[appSafeLink]",
  standalone: true,
  host: {
    "(click)": "onClick($event)",
  },
})
export class SafeLinkDirective {
  queryParam = input<string>("my-app", { alias: "appSafeLink" });
  private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

  onClick(event: MouseEvent) {
    const wantsToLeave = window.confirm(
      "do you want to navigate to different website?"
    );

    if (wantsToLeave) {
      const address = this.hostElementRef.nativeElement.href;
      this.hostElementRef.nativeElement.href =
        address + `?from=` + this.queryParam();
      return;
    }

    event.preventDefault();
  }
}
