import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {InMemoryDataService} from './in-memory-data.service';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {SkillsComponent} from './skills/skills.component';
import {AppRoutingModule} from '../app-routing.module';
import { BiographyComponent } from './biography/biography.component';
import { ContactComponent } from './contact/contact.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {environment} from '../environments/environment';
import { FieldErrorDisplayComponent } from './contact/field-error-display/field-error-display.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    BiographyComponent,
    ContactComponent,
    FieldErrorDisplayComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
