import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { HomeComponent } from './home/home.component';
import { OurProjectComponentt } from './our-project/our-project.component';
import { OurProjectsComponent } from './Our-projects/our-projects.component';
const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'about', component: AboutComponent },
  { path: 'projects', component: OurProjectComponentt },
  {path:'youthRoom', component: ComingSoonComponent},
  {path:'events', component: ComingSoonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
