import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-e-lounge',
  templateUrl: './e-lounge.component.html',
  styleUrls: ['./e-lounge.component.css']
})
export class ELoungeComponent implements OnInit {
  _albums: any = [];

  constructor() {
    for (let i = 2; i <= 12; i++) {
      const src = 'assets/images/e-lounge/' + i + '.jpg';
      const thumb = 'assets/images/e-lounge/' + i + '.jpg';
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
