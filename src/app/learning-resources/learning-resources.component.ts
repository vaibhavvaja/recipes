import { Component } from "@angular/core";
import { DemoDirective } from "../demo.directive";

@Component({
  selector: "app-learning-resources",
  templateUrl: "./learning-resources.component.html",
  styleUrl: "./learning-resources.component.css",
  standalone: true,
  imports: [DemoDirective],
})
export class LearningResourcesComponent {
  onClick(data: string) {
    console.log(data);
  }
}
