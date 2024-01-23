import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ServicesComponent } from './services/services.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { ProjectsComponent } from './projects/projects.component';
import { LightboxModule } from 'ngx-lightbox';
import { ContactComponent } from './contact/contact.component';
import { FLoungeComponent } from './f-lounge/f-lounge.component';
import { HomeComponent } from './home/home.component';
import { AhlenComponent } from './ahlen/ahlen.component';
import { ELoungeComponent } from './e-lounge/e-lounge.component';
import { VillaComponent } from './villa/villa.component';
import { NnavComponent } from './nnav/nnav.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


registerLocaleData(en);




@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    AboutUsComponent,
    FurnitureComponent,
    ProjectsComponent,
    ContactComponent,
    FLoungeComponent,
    HomeComponent,
    AhlenComponent,
    ELoungeComponent,
    VillaComponent,
    NnavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatMenuModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    LightboxModule,
    FormsModule,
    HttpClientModule,

    
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatSlideToggleModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
