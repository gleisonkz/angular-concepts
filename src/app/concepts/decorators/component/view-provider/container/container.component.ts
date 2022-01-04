import { Component } from '@angular/core';

import { LoggerService } from './logger.service';

@Component({
  selector: 'ct-container',
  template: `
    <ct-header></ct-header>
    <ng-content></ng-content>
  `,
  viewProviders: [LoggerService],
})
export class ContainerComponent {}
