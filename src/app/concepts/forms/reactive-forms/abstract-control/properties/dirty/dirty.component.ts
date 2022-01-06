import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'ct-dirty',
  template: `
    <p>nameControl.dirty {{ nameControl.dirty }}</p>

    <input type="text" [formControl]="nameControl" />
  `,
})
export class DirtyComponent {
  nameControl = new FormControl('', [Validators.required]);
}
