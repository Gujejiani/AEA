import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProjectData, projectsService } from '../shared/projects.service';

@Component({
  selector: 'app-our-project',
  templateUrl: './our-project.component.html',
  styleUrls: ['./our-project.component.scss']
})
export class OurProjectComponent implements OnInit, OnDestroy {
  projects: ProjectData
  projectKeys: string[]
  private subscription: Subscription
  constructor(private projectService: projectsService) { }

  ngOnInit(): void {




    this.projects = this.projectService.getProjects()
    if(this.projects){
      this.projectKeys = Object.keys(this.projects)

    }

    if(!this.projects){
      this.subscription=  this.projectService.projectsData$.subscribe(projects=>{
        this.projects = projects
        if(this.projects){
          this.projectKeys = Object.keys(this.projects)
        }
      })
    }
    console.log(this.projects)
  }

  showLeft(i: number){
    if((this.projectKeys.length % 2) ===0){
      return (i  + 2) % 2 ===0
    }
    return (i  + 2) % 2 !==0
  }

  showRight(i: number){
    if((this.projectKeys.length % 2) ===0){
      return (i  + 2) % 2 !==0
    }
    return (i  + 2) % 2 ===0
  }

  ngOnDestroy(): void {
    if(this.subscription){

      this.subscription.unsubscribe()
    }
  }

  trackByIndex(index: number, item: any) {

    return index;
  }
}
