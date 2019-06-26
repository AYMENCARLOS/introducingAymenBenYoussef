import { Component, OnInit } from '@angular/core';
import {FileDonwloadService} from './file-donwload.service';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.css'],
  providers : [FileDonwloadService]
})
export class BiographyComponent implements OnInit {

  constructor(private downloadService: FileDonwloadService) { }

  ngOnInit() {
  }

  public downloadFile() {
    this.downloadService.downloadCv();
  }

}
