import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ref, listAll, getDownloadURL} from 'firebase/storage'
import { ProjectData, projectsService } from './shared/projects.service';
import { storage } from './shared/storage';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'AEA';
  imageRef = ref(storage, 'projects/')
  constructor(private http: HttpClient, private projectService: projectsService){}
  ngOnInit(){

     this.projectService.startFetchingProjects()

  }





}
