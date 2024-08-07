import { Component } from '@angular/core';

@Component({
  selector: 'cave',
  templateUrl: './cave.component.html',
  styleUrl: './cave.component.css',
})
export class CaveComponent {
  title = 'Bruce Wayne';
  count = 0;
  cave = false;
  mansion = false;
  batmobile = false;
  input = '';

  addCountCave() {
    this.cave = true;
    if (this.mansion || this.batmobile) {
      this.count = 0;
    }
    this.increaseCount();
    this.mansion = this.batmobile = false;
  }

  addCountMansion() {
    this.mansion = true;
    if (this.cave || this.batmobile) {
      this.count = 0;
    }
    this.increaseCount();
    this.cave = false;
    this.batmobile = false;
  }

  addCountBatmobile() {
    this.batmobile = true;
    if (this.cave || this.mansion) {
      this.count = 0;
    }
    this.increaseCount();
    this.mansion = false;
    this.cave = false;
  }

  increaseCount() {
    this.count++;
  }

  onClass(value) {
    if (value) {
      return 'btn btn-danger';
    } else {
      return 'btn btn-dark';
    }
  }

  onInputValue(event) {
    this.input = event.target.value;
  }
}
