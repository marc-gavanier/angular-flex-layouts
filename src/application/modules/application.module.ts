import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ApplicationRoutingModule} from './application-routing.module';
import {APPLICATION_LAYOUTS, RootLayout} from '../layouts';
import {APPLICATION_PAGES} from '../pages';
import {APPLICATION_COMPONENTS} from '../components';

@NgModule({
  declarations: [
    ...APPLICATION_COMPONENTS,
    ...APPLICATION_LAYOUTS,
    ...APPLICATION_PAGES,
  ],
  imports: [
    BrowserModule,
    ApplicationRoutingModule
  ],
  providers: [],
  bootstrap: [RootLayout]
})
export class ApplicationModule { }
