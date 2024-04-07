import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ref} from 'firebase/storage'
import {  projectsService } from './shared/projects.service';
import { storage } from './shared/storage';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit, OnDestroy{
  title = 'AEA';
  imageRef = ref(storage, 'projects/')
  constructor(private http: HttpClient, private projectService: projectsService){}
  ngOnInit(){
    console.log('Angular 16 is running! woohoo!')
     this.projectService.startFetchingProjects()

  }


ngOnDestroy(): void {
    this.projectService.projectsData$.unsubscribe()
}


}
