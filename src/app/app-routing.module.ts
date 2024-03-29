import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdmProjectComponent } from './adm-project/adm-project.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { HomeComponent } from './home/home.component';
import { OurProjectComponent } from './our-project/our-project.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'about', component: AboutComponent },
  { path: 'projects', component: OurProjectComponent },
  { path: 'youthRoom', component: ComingSoonComponent },
  { path: 'events', component: ComingSoonComponent },
  { path: 'pholadashvili', component: AdmProjectComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
