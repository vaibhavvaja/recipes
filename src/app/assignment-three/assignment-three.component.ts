import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment-three',
  templateUrl: './assignment-three.component.html',
  styleUrl: './assignment-three.component.css',
})
export class AssignmentThreeComponent {
  paragraph =
    'if you click the Display Text button this paragraph will be hidden';
  counts = [];

  onToggleParagraph() {
    this.counts.push(new Date());
    if (this.paragraph) {
      this.paragraph = '';
    } else {
      this.paragraph =
        'if you click the Display Text button this paragraph will be hidden';
    }
  }

  checkForCountBgColor(idx: number) {
    if (idx >= 4) {
      return { backgroundColor: 'blue' };
    }
    return {};
  }

  setWhiteClass(idx: number) {
    if (idx >= 4) {
      return 'white';
    }
    return {};
  }
}
