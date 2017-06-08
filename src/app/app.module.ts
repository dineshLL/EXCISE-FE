import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AuthGuard } from './_guards';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AlertDirective } from './_directives';

// services
import {
  AlertService,
  AuthenticationService,
  UserService,
  CrService
} from './_services';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MenuComponent } from './menu/menu.component';
import { CrComponent } from './cr/cr.component';
import { AccusedComponent } from './accused/accused.component';
import { InformantComponent } from "./informant/informant.component";
import { ItemComponent } from "./item/item.component";
import { OfficerComponent } from "./officer/officer.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlertDirective,
    HomeComponent,
    RegisterComponent,
    MenuComponent,
    CrComponent,
    AccusedComponent,
    InformantComponent,
    ItemComponent,
    OfficerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    CrService,

    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
