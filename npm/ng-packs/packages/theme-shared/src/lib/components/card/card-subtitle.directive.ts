import { Directive, HostBinding } from '@angular/core';

@Directive({
  standalone: false,
  selector: `abp-card-subtitle, [abp-card-subtitle], [abpCardSubtitle]`,
})
export class CardSubtitleDirective {
  @HostBinding('class') directiveClass = 'card-subtitle';
}
