import { InMemoryDbService } from 'angular-in-memory-web-api';
/*
 * Copyright (c)  Aymen Ben Youssef
 */

export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    let heroes = [
      {id : 1, name :'Mr.America'},
      {id : 2, name :'Superman'},
      {id : 3, name :'Batman'},
      {id : 4, name :'Flash Gordon'}
      ];
    return {heroes};
  }

}
