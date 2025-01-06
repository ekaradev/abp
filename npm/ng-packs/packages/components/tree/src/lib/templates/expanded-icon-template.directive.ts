import { Directive, TemplateRef } from '@angular/core';

@Directive({
  standalone: false,
  selector: '[abpTreeExpandedIconTemplate],[abp-tree-expanded-icon-template]',
})
export class ExpandedIconTemplateDirective {
  constructor(public template: TemplateRef<any>) {}
}
