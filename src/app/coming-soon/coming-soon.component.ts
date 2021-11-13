import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss']
})
export class ComingSoonComponent implements OnInit {
  page: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
    const url: string[] = this.router.url.split('/')
    this.page = url[url.length-1]
    console.log(this.page)
  }

}
