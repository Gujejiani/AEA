import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {  Injectable  } from '@angular/core';
import { listAll, getDownloadURL, ref } from 'firebase/storage';
import { storage } from './storage';



export type ProjectData  = {[key: string]: {title: string, text1: string, text2: string, imageUrl: string}}
@Injectable({providedIn: 'root'})
export class projectsService {
    projects: ProjectData
    imageRef = null;

    projectsData$ = new Subject<ProjectData>()

    constructor(private http: HttpClient,){
      if (typeof localStorage !== 'undefined') { 
        this.imageRef= ref(storage, 'projects/')
      }
    }

    checkIfProjects(){
     return this.projects ? true: false
    }
    getProjects (){
        return this.projects
    }


    addProjects (projects: ProjectData){
        this.projects = projects
    }

  startFetchingProjects(setInfo?: (projects: ProjectData)=>void){
      this.http.get('https://healthcontrol-76123.firebaseio.com/projects.json').subscribe(res=>{



     if (typeof localStorage !== 'undefined') { 
      const projectData = this.addImageUrls(res as ProjectData)
      this.addProjects(projectData)
      this.projectsData$.next(projectData)
     }
    

    })


    }

    addImageUrls(projectData: ProjectData){

      listAll(this.imageRef).then(res=>{

        try{
          res?.items.forEach(item=>{
          if(projectData){
            Object.keys(projectData)?.forEach(key=>{
              if(projectData[key].title === item.name){
                getDownloadURL(item).then(url=>{
                  projectData[key] = {...projectData[key], imageUrl: url}
                // console.log(url,'url added')
                })

              }

            })

          }




          })
        }catch(err){
          console.log(err)
        }

      })

      return projectData
    }



}
