import {
    DirtyComponent
} from 'src/app/concepts/forms/reactive-forms/abstract-control/properties/dirty/dirty.component';
import {
    PristineComponent
} from 'src/app/concepts/forms/reactive-forms/abstract-control/properties/pristine/pristine.component';

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PristineComponent, DirtyComponent],
  imports: [ReactiveFormsModule],
  exports: [PristineComponent, DirtyComponent],
})
export class ReactiveFormsConceptModule {}
