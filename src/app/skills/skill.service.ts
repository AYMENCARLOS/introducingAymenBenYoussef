/*
 * Copyright (c)  Aymen Ben Youssef
 */

import {Observable} from 'rxjs';
import {Skill} from './skill';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class SkillService {
  skillsUrl = 'api/heroes'; //url to web api


  constructor(  private http: HttpClient) {
  }

  /** GET Skills from the server  **/
  getSkills (): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.skillsUrl);
  }

}
