import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ct-touched',
  template: `
    <p>nameControl.touched {{ nameControl.touched }}</p>

    <input type="text" [formControl]="nameControl" />
  `,
})
export class TouchedComponent {
  nameControl = new FormControl(null);
}
