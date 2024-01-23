import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-f-lounge',
  templateUrl: './f-lounge.component.html',
  styleUrls: ['./f-lounge.component.css']
})
export class FLoungeComponent implements OnInit {
  _albums: any = [];

  constructor() {
    for (let i = 2; i <= 19; i++) {
      const src = 'assets/images/f-lounge/' + i + '.jpeg';
      const thumb = 'assets/images/f-lounge/' + i + '.jpeg';
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
