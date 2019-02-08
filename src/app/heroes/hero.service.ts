/*
 * Copyright (c)  Aymen Ben Youssef
 */

import {Observable} from 'rxjs';
import {Hero} from './hero';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {HandleError} from '../http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class HeroService {
  heroesUrl = 'api/heroes'; //url to web api
  private handleError: HandleError;

  constructor(  private http: HttpClient) {

  }

  /** GET Heroes from the server  **/
  getHeroes (): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
     // .pipe(
   //     catchError(this.handleError('getHeroes', []))
  //    );
  }

  addHero(hero : Hero):Observable<Hero>{
    return this.http.post<Hero>(this.heroesUrl,hero,httpOptions);
  }

  deleteHero(id : number):Observable<{}>{
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url,httpOptions);
  }
}
