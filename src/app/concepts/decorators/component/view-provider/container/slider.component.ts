import { Component } from '@angular/core';

import { LoggerService } from './logger.service';

@Component({
  selector: 'ct-slider',
  template: ` <p>slider works!</p> `,
})
export class SliderComponent {
  constructor(private loggerService: LoggerService) {
    this.loggerService.log('SliderComponent from service');
  }
}
