import { ProjectData, projectsService } from './../shared/projects.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage, ref, uploadBytes} from 'firebase/storage'
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
    this.uploadImage(form.form.value.title)
    console.log(form.form.value)

   this.http.post('https://healthcontrol-76123.firebaseio.com/projects.json', {title: form.form.value.title, text1: form.form.value?.text1, text2: form.form.value?.text2}).subscribe(res=>{
      console.log(res)
    })

  }
  uploadImage(title: string){

    const imageRef = ref(this.storage, `projects/${title}`)

    uploadBytes(imageRef, this.image).then(res=>{
      console.log(res)
    })
  }

  onDelete(key: string){
    console.log('delete :', key)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
