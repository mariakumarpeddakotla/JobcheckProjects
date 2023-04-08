import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import * as Sentry from "@sentry/angular";
import { BrowserTracing } from "@sentry/tracing";
import { APP_INITIALIZER, ErrorHandler } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PersonalInfoComponent } from './authentication/component_two/personal-info/personal-info.component';
import { AuthenticationModule } from './authentication/authentication.module';



//Change dsn url as provided in the sentry configuration
Sentry.init({
  //dsn: "https://954317fb688f4447b374990c522607d0@o4504440644960256.ingest.sentry.io/4504440646139909",


});


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    AuthenticationModule
  ],
  providers: [{
    provide: ErrorHandler,
    useValue: Sentry.createErrorHandler({
      showDialog: true,
    }),
  },
  {
    provide: Sentry.TraceService,
    deps: [Router],
  },
  {
    provide: APP_INITIALIZER,
    useFactory: () => () => { },
    deps: [Sentry.TraceService],
    multi: true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
