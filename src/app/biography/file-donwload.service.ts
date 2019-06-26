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
  fileUrl = 'assets/Files/Aymen_Ben_Youssef_Consultant_Senior_Java_J2ee_June2019.pdf';

  constructor(private http: HttpClient) { }

  public downloadCv() {

    let link = document.createElement('a');
    link.download = 'Aymen_Ben_Youssef_Consultant_Senior_Java_J2ee_June2019';
    link.href = this.fileUrl;
    link.click();
  }
}
