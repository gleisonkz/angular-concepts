import {
    ContainerComponent
} from 'src/app/concepts/decorators/component/view-provider/container/container.component';
import {
    HeaderComponent
} from 'src/app/concepts/decorators/component/view-provider/container/header.component';
import {
    SliderComponent
} from 'src/app/concepts/decorators/component/view-provider/container/slider.component';
import {
    ViewProviderComponent
} from 'src/app/concepts/decorators/component/view-provider/view-provider.component';
import {
    ReactiveFormsConceptModule
} from 'src/app/concepts/forms/reactive-forms/reactive-forms.concept.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeaderComponent,
    ViewProviderComponent,
    SliderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsConceptModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
