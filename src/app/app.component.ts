import { Component, OnInit, signal } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { interval, Observable, Subscription } from "rxjs";

@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  easy$ = interval(1000);
  // new Observable<string>((subscriber) => {
  //   setTimeout(() => {
  //     subscriber.next("1");
  //   }, 1000);
  //   setTimeout(() => {
  //     subscriber.next("2");
  //   }, 2000);
  //   setTimeout(() => {
  //     subscriber.next("3");
  //   }, 3000);
  //   setTimeout(() => {
  //     subscriber.complete();
  //   }, 4000);
  // });
  easySignal = signal<number>(0);
  private subscription: Subscription | undefined;

  ngOnInit() {
    this.subscription = this.easy$.subscribe((val) => {
      this.easySignal.set(val + 5);
    });
  }

  onClick() {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
