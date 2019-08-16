import { Component, OnInit,Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnChanges {

  @Input() blog : any; 
  blogForm : any = {title:'asdsadsa', content:'adsads'};

  constructor() { }

  ngOnInit() {
    this.blogForm = JSON.parse(JSON.stringify(this.blog));
  }

  ngOnChanges() {
    this.blogForm = JSON.parse(JSON.stringify(this.blog));
  }

  updateBlog(data){
    console.log(this.blogForm);
  }

}
