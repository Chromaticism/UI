import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Subject, BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  constructor(private _postService : PostService) { }

  ngOnInit() {
  }

  createBlog(data, valid){

    if(valid){

      this._postService.saveBlog(data);

    }
  

  }

}
