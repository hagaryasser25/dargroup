import { Component, Input, OnInit } from "@angular/core";
import { Lightbox } from 'ngx-lightbox';



@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})



export class ProjectsComponent  {
  _albums: any = [];
  constructor(private _lightbox: Lightbox) {
    for (let i = 1; i <= 16; i++) {
      const src = 'assets/images/p' + i + '.jpg';
      const thumb = 'assets/images/p' + i + '.jpg';
      const album = {
         src: src,
         thumb: thumb
      };

      this._albums.push(album);
    }
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._albums, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

}
