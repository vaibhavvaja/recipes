import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  output,
  viewChild,
  ViewChild,
} from "@angular/core";
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-create-ticket",
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: "./create-ticket.component.html",
  styleUrl: "./create-ticket.component.css",
})
export class CreateTicketComponent implements AfterViewInit, OnInit {
  @ViewChild("form") form?: ElementRef<HTMLFormElement>;
  // form = viewChild.required<ElementRef<HTMLFormElement>>("form");

  add = output<{ title: string; request: string }>();

  ngOnInit() {
    // console.log("AFTER ON INIT");
    // console.log(this.form?.nativeElement);
  }

  ngAfterViewInit() {
    // console.log("AFTER VIEW INIT");
    // console.log(this.form?.nativeElement);
  }
  onSubmit(title: string, description: string) {
    this.add.emit({ title: title, request: description });
    this.form?.nativeElement.reset();
  }
}
