/*
 * Copyright (c)  Aymen Ben Youssef
 */

import {RouterModule, Routes} from '@angular/router';
import {SkillsComponent} from './app/skills/skills.component';
import {NgModule} from '@angular/core';
import {BiographyComponent} from './app/biography/biography.component';
import {ContactComponent} from './app/contact/contact.component';

const routes :Routes = [
  { path : 'skills', component : SkillsComponent },
  { path : 'home', component : BiographyComponent },
  { path : 'contact', component : ContactComponent },
  { path : '', redirectTo: '/home', pathMatch:'full'}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
