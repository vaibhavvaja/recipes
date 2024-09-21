import { Component } from "@angular/core";
import { DemoDirective } from "../demo.directive";
import { SafeLinkDirective } from "../safe-link.directive";

@Component({
  selector: "app-learning-resources",
  templateUrl: "./learning-resources.component.html",
  styleUrl: "./learning-resources.component.css",
  standalone: true,
  imports: [DemoDirective, SafeLinkDirective],
})
export class LearningResourcesComponent {
  onClick(data: string) {
    console.log(data);
  }
}
