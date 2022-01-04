import {
    ContainerComponent
} from 'src/app/concepts/decorators/component/view-provider/container/container.component';
import {
    HeaderComponent
} from 'src/app/concepts/decorators/component/view-provider/container/header.component';
import {
    SliderComponent
} from 'src/app/concepts/decorators/component/view-provider/container/slider.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeaderComponent,
    SliderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
