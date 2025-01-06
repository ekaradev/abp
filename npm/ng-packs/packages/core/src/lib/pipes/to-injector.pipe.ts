import { InjectionToken, Injector, Pipe, PipeTransform } from '@angular/core';

export const INJECTOR_PIPE_DATA_TOKEN = new InjectionToken<PipeTransform>(
  'INJECTOR_PIPE_DATA_TOKEN',
);

@Pipe({
  standalone: false,
  name: 'toInjector',
})
export class ToInjectorPipe implements PipeTransform {
  constructor(private injector: Injector) {}
  transform(
    value: any,
    token: InjectionToken<any> = INJECTOR_PIPE_DATA_TOKEN,
    name = 'ToInjectorPipe',
  ): Injector {
    return Injector.create({
      providers: [
        {
          provide: token,
          useValue: value,
        },
      ],
      parent: this.injector,
      name,
    });
  }
}
