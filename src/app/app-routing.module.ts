import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { FLoungeComponent } from './f-lounge/f-lounge.component';
import { AhlenComponent } from './ahlen/ahlen.component';
import { ELoungeComponent } from './e-lounge/e-lounge.component';
import { VillaComponent } from './villa/villa.component';
import { FurnitureComponent } from './furniture/furniture.component';

const routes: Routes = [
  { path: 'home',  component: HomeComponent, },
  { path: 'projects',  component: ProjectsComponent },
  { path: 'about-us',  component: AboutUsComponent },
  { path: 'contact',  component: ContactComponent },
  { path: 'f-lounge',  component: FLoungeComponent },
  { path: 'ahlen',  component: AhlenComponent },
  { path: 'e-lounge',  component: ELoungeComponent },
  { path: 'villa',  component: VillaComponent },
  { path: 'furniture',  component: FurnitureComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
