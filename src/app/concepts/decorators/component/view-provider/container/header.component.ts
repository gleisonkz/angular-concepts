import { Component } from '@angular/core';

import { LoggerService } from './logger.service';

@Component({
  selector: 'ct-header',
  template: ` <p>header works!</p> `,
})
export class HeaderComponent {
  constructor(private loggerService: LoggerService) {
    this.loggerService.log('HeaderComponent from service');
  }
}
