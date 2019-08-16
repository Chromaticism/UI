import { Component, OnInit, Input } from '@angular/core';
import { PostService} from '../post.service';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor(private _postService : PostService) { }

  comments: any = [];
  showComments : boolean = false;
  @Input() blogId : number; 
  @Input() blogComments: [];

  ngOnInit() {

  
    this._postService.getComments(this.blogComments);

    this._postService.$comments.subscribe((data: any) => {

      this.comments = data;
      
      //console.log(this.comments);
    });

   // this.comments = this._postService.getComments(this.blogComments);

   // console.log(this.blogId);
   
    

  }

  createComment(data, valid){
    if(valid){

      this._postService.createComment(this.blogId, data);
      //console.log(data);
    }
  }

  getComments(){

  }

  

}
