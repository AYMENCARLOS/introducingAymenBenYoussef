import { InMemoryDbService } from 'angular-in-memory-web-api';
/*
 * Copyright (c)  Aymen Ben Youssef
 */

export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    const skills = [
      {id : 1,  name :'Java 8',  percentage:60},
      {id : 2,  name :'Java 7',  percentage:90},
      {id : 3,  name :'Java 6',  percentage:90},
      {id : 4,  name :'Spring/Spring Boot', percentage:60},
      {id : 4,  name :'JHipster', percentage:30},
      {id : 5,  name :'Angular', percentage:70},
      {id : 6,  name :'Oracle SGBD', percentage:80},
      {id : 7,  name :'HTML5/CSS/DOM',  percentage:80},
      {id : 8,  name :'Bootstrap',  percentage:60},
      {id : 9,  name :'pl/sql',  percentage:70},
      {id : 10, name :'Maven',  percentage:70}
      ];
    return {heroes: skills};
  }

}
