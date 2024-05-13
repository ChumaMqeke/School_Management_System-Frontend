import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, HttpClient, provideHttpClient } from '@angular/common/http';
// import { provideHttpClient } from '@nguniversal/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
// import { AdminGuard } from './service/admin.guard';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    // provideHttpClient(HttpClient).withFetch(),
    provideClientHydration(),
    // AdminGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
