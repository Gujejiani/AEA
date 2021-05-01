import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { WhatWeDoComponent } from './home/what-we-do/what-we-do.component';
import { WhatWeDoItemComponent } from './home/what-we-do/what-we-do-item/what-we-do-item.component';
import { ProjectsComponent } from './home/projects/projects.component';
import { VideoComponent } from './home/video/video.component';
import { RewievsComponent } from './home/rewievs/rewievs.component';
import { ReviewComponent } from './home/rewievs/review/review.component';
import { PartnersComponent } from './home/partners/partners.component';
import { PartnerComponent } from './home/partners/partner/partner.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OurProjectsComponent } from './our-projects/our-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    WhatWeDoComponent,
    WhatWeDoItemComponent,
    ProjectsComponent,
    VideoComponent,
    RewievsComponent,
    ReviewComponent,
    PartnersComponent,
    PartnerComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    OurProjectsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
