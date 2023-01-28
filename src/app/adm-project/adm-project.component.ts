import { ProjectData, projectsService } from './../shared/projects.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ref, uploadBytes} from 'firebase/storage'
import { storage } from '../shared/storage';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-adm-project',
  templateUrl: './adm-project.component.html',
  styleUrls: ['./adm-project.component.scss']
})
export class AdmProjectComponent implements OnInit, OnDestroy {
  projects: ProjectData
  projectKeys: string[]
  loading: boolean
  private subscription: Subscription

  constructor(private http: HttpClient, private projectService: projectsService ) { }
  storage= storage

  image: any
   ngOnInit(): void {
   this.projectService.startFetchingProjects()

  this.subscription=  this.projectService.projectsData$.subscribe(projects=>{
      this.projects = projects
      if(this.projects){
        this.projectKeys = Object.keys(this.projects)
      }
    })


  }
  setProjectInfo(projectsData: ProjectData){


    console.log('yeah baby called me ')
    console.log(projectsData)
    if(projectsData){
      this.projects = projectsData
      this.projectKeys = Object.keys(projectsData)
    }

  }

  processImage(image: any){
      if(image?.files?.length){
        console.log('image added')
        this.image = image.files[0]
      }


  }
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

  onSubmit(form: NgForm){
    if(!this.loading){

      this.loading =true
      this.uploadImage(form.form.value.title)
      console.log(form.form.value)

     this.http.post('https://healthcontrol-76123.firebaseio.com/projects.json', {title: form.form.value.title, text1: form.form.value?.text1, text2: form.form.value?.text2}).subscribe(res=>{
        console.log(res)
        this.loading =false
        form.reset()
      })

    }

  }
  uploadImage(title: string){

    const imageRef = ref(this.storage, `projects/${title}`)

    uploadBytes(imageRef, this.image).then(res=>{
      console.log(res)
    })
  }

  onDelete(key: string){
    this.http.delete(`https://healthcontrol-76123.firebaseio.com/projects/${key}.json`) .subscribe(
      (response) => {
        console.log(response)
        console.log('Item deleted successfully');
        this.projectService.startFetchingProjects()
      },
      (error) => {
        console.log(error)
        console.log('Error deleting item:', error);
      }
    );

  }

  ngOnDestroy(): void {
    if(this.subscription){

      this.subscription.unsubscribe()
    }
  }
}
