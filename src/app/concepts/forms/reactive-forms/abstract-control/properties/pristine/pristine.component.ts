import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'ct-pristine',
  template: `
    <p>nameControl.pristine {{ nameControl.pristine }}</p>

    <input type="text" [formControl]="nameControl" />
  `,
})
export class PristineComponent {
  nameControl = new FormControl('', [Validators.required]);
}
