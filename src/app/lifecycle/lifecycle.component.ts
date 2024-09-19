import {
  Component,
  Input,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges,
  input,
} from "@angular/core";

@Component({
  selector: "app-lifecycle",
  standalone: true,
  imports: [],
  templateUrl: "./lifecycle.component.html",
  styleUrl: "./lifecycle.component.css",
})
export class LifecycleComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  text = input.required<string>();

  constructor() {
    console.log("CONSTRUCTOR");
  }

  ngOnInit() {
    console.log("ngOnInit");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges");
    console.log(changes);
  }

  ngDoCheck() {
    console.log("ngDoCheck");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }
}
