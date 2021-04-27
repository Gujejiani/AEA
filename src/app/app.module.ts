import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { WhatWeDoItemComponent } from './what-we-do/what-we-do-item/what-we-do-item.component';
import { ProjectsComponent } from './projects/projects.component';
import { VideoComponent } from './video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    WhatWeDoComponent,
    WhatWeDoItemComponent,
    ProjectsComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
