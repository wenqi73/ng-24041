import { Component, Input } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-root',
  animations: [
    trigger('tagAnimation', [
      transition('void => *', [
        animate('150ms linear', style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate('150ms linear', style({ opacity: 0 }))
      ])
    ])
  ],
  template: `
  <content [display]="display">
    <span *ngFor="let i of listOfOption" [@tagAnimation]>{{i}}</span>
  </content>
  <button (click)="display = !display">toggle</button>
  `
})
export class AppComponent {
  title = 'app';
  display = true;
  listOfOption = [1, 2, 3];

  constructor() {
  }

}

@Component({
  selector: 'content',
    animations         : [
      trigger('dropDownAnimation', [
    ])
  ],
  template: `
  <div [@dropDownAnimation] *ngIf="display">
    <ng-content></ng-content>
  </div>
  `,
  styles: [`h1 { font-family: Lato; }`]
})
export class ContentComponent {
  @Input() display = false;
}
