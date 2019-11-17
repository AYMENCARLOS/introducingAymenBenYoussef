import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Injectable} from "@angular/core";
/*
 * Copyright (c)  Aymen Ben Youssef
 */

@Injectable()
export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    const skills = [
      {id : 1,  name :'Java 8', category:'Programming',percentage:60},
      {id : 2,  name :'Java 7', category:'Programming', percentage:90},
      {id : 3,  name :'Java 6', category:'Programming', percentage:90},
      {id : 4,  name :'Spring/Spring Boot',category:'Framework', percentage:60},
      {id : 6,  name :'Angular', category:'Framework',percentage:70},
      {id : 5,  name :'JHipster', category:'Framework',percentage:30},
      {id : 7,  name :'Oracle/pl-sql', category:'DataBase',percentage:80},
      {id : 8,  name :'HTML5/CSS/DOM', category:'Programming', percentage:80},
      {id : 9,  name :'Bootstrap', category:'Framework', percentage:60},
      {id : 10,  name :'JBoss',  category:'WebServer',percentage:70},
      {id : 11,  name :'SYBASE/T-sql',  category:'DataBase',percentage:50},
      {id : 12,  name :'WebLogic'    ,  category:'WebServer',percentage:70},
      {id : 13,  name :'Drupal 8'    ,  category:'Framework',percentage:60},
      ];
    return {skills: skills};
  }

}
