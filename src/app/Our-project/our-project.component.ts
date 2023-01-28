import { Component, OnInit } from '@angular/core';
import { ProjectData, projectsService } from '../shared/projects.service';

@Component({
  selector: 'app-our-project',
  templateUrl: './our-project.component.html',
  styleUrls: ['./our-project.component.scss']
})
export class OurProjectComponent implements OnInit {
  projects: ProjectData
  projectKeys: string[]
  constructor(private projectService: projectsService) { }

  ngOnInit(): void {




    this.projects = this.projectService.getProjects()
    this.projectKeys = Object.keys(this.projects)
    console.log(this.projects)
  }

}
