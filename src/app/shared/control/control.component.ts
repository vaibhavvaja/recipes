import {
  AfterContentInit,
  Component,
  contentChild,
  ContentChild,
  ElementRef,
  input,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

@Component({
  selector: "app-control",
  standalone: true,
  imports: [],
  templateUrl: "./control.component.html",
  styleUrl: "./control.component.css",
  encapsulation: ViewEncapsulation.None,
  host: {
    class: "control",
    // "(click)": "onClick()",
  },
})
export class ControlComponent implements OnInit, AfterContentInit {
  // @HostBinding("class") className = "control";
  // @HostListener("click")
  // onClick() {
  //   console.log("hello");
  // }

  // @ContentChild("input") private control?: ElementRef<
  //   HTMLInputElement | HTMLTextAreaElement
  // >;

  private control =
    contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>(
      "input"
    );

  ngOnInit() {
    // console.log("AFTER ON INIT");
    // console.log(this.control?.nativeElement);
  }

  ngAfterContentInit() {
    // console.log("AFTER CONTENT INIT");
    // console.log(this.control().nativeElement);
  }

  label = input.required<string>();
}
