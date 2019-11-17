import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token',
    'responseType': 'Blob' as 'Json'
  })
};

@Injectable()
export class FileDonwloadService {
  fileUrl = 'assets/Files/Aymen_Ben_Youssef_Full_Stack_Consultant.pdf';

  constructor(private http: HttpClient) { }

  public downloadCv() {

    let link = document.createElement('a');
    link.download = 'Aymen_Ben_Youssef_Full_Stack_Consultant';
    link.href = this.fileUrl;
    link.click();
  }
}
