import { Component, Input } from '@angular/core';

@Component({
  standalone: false,
  selector: 'abp-card',
  template: ` <div class="card" [ngClass]="cardClass" [ngStyle]="cardStyle">
    <ng-content></ng-content>
  </div>`,
})
export class CardComponent {
  @Input() cardClass: string;

  @Input() cardStyle: string;
}
