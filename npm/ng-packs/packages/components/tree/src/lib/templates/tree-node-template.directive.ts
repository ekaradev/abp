import { Directive, TemplateRef } from '@angular/core';

@Directive({
  standalone: false,
  selector: '[abpTreeNodeTemplate],[abp-tree-node-template]',
})
export class TreeNodeTemplateDirective {
  constructor(public template: TemplateRef<any>) {}
}
