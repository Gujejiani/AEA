import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';



export type ProjectData  = {[key: string]: {title: string, text1: string, text2: string, imageUrl: string}}
@Injectable({providedIn: 'root'})
export class projectsService {
    projects: ProjectData





    getProjects (){
        return this.projects
    }


    addProjects (projects: ProjectData){
        this.projects = projects
    }



}