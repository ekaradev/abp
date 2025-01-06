import { inject, provideAppInitializer } from '@angular/core';
import { NgbInputDatepickerConfig, NgbTypeaheadConfig } from '@ng-bootstrap/ng-bootstrap';

export const NG_BOOTSTRAP_CONFIG_PROVIDERS = [
  provideAppInitializer(() => {
    configureNgBootstrap();
  }),
];

export function configureNgBootstrap() {
  const datepicker: NgbInputDatepickerConfig = inject(NgbInputDatepickerConfig);
  const typeahead: NgbTypeaheadConfig = inject(NgbTypeaheadConfig);
  datepicker.container = 'body';
  typeahead.container = 'body';
}
