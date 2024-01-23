import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-villa',
  templateUrl: './villa.component.html',
  styleUrls: ['./villa.component.css']
})
export class VillaComponent implements OnInit {

  _albums: any = [];

  constructor() {
    for (let i = 2; i <= 12; i++) {
      const src = 'assets/images/villa/' + i + '.JPG';
      const thumb = 'assets/images/villa/' + i + '.JPG';
      const album = {
        src: src,
        thumb: thumb
     };


      this._albums.push(album);
    }
  }

  ngOnInit(): void {
    AOS.init();
  }

}
