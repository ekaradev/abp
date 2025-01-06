import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-root',
  template: `
    <abp-loader-bar />
    <abp-dynamic-layout />
  `,
})
export class AppComponent {}
