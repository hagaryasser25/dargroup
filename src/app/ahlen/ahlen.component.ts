import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-ahlen',
  templateUrl: './ahlen.component.html',
  styleUrls: ['./ahlen.component.css']
})
export class AhlenComponent implements OnInit {
  _albums: any = [];

  constructor() {
    for (let i = 2; i <= 17; i++) {
      const src = 'assets/images/ahlen/' + i + '.jpg';
      const thumb = 'assets/images/ahlen/' + i + '.jpg';
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
