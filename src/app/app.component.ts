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
  

    this.http.get('https://healthcontrol-76123.firebaseio.com/projects.json').subscribe(res=>{

     const projectData = this.addImageUrls(res as ProjectData)

      this.projectService.addProjects(projectData)
      console.log(res)
      console.log(this.projectService.getProjects())
    })
  }


  addImageUrls(projectData: ProjectData){
   
    listAll(this.imageRef).then(res=>{
      console.log(res)
      Object.keys(projectData).forEach(data=>{
        

      })
      try{
      
        res.items.forEach(item=>{

          Object.keys(projectData).forEach(key=>{
            if(projectData[key].title === item.name){
              let imageUrl: string
              getDownloadURL(item).then(url=>{
                projectData[key] = {...projectData[key], imageUrl: url}
               console.log('url added')
              })
              if(imageUrl){
               
              }
            }

          })

          
          
        })
      }catch(err){
        console.log(err)
      }
      
    })

    return projectData
  }

  
}
