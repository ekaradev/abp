import { Directive, HostBinding } from '@angular/core';

@Directive({
  standalone: false,
  selector: `abp-card-header, [abp-card-header], [abpCardHeader]`,
})
export class CardHeaderDirective {
  @HostBinding('class') directiveClass = 'card-header';
}
