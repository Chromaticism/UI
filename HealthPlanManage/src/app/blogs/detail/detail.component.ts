import { Component, OnInit } from '@angular/core';
import { PostService} from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  currentBlog : any = {author:{name:'', id:''}, like:[]};
  showComment: boolean = false;
  comments: any = [];

  constructor(private _postService : PostService, private _activatedRoute : ActivatedRoute) { }

  ngOnInit() {

    this._activatedRoute.params.subscribe((data) => {
      console.log(data.Bid);

      let currId = data.Bid;
      this._postService.getPost();

      this._postService.$blogs.subscribe((data: any) => {
       console.log(data); 
      this.currentBlog = data.find(function(element){
        return element._id == currId;
      });
      
      
      console.log(this.currentBlog);
     
    });
    });
  }

  like(){

    this._activatedRoute.params.subscribe((data) => {

      this._postService.likeThis(data.Bid);

    });
  }

  commentToggle(){
    this.showComment = !this.showComment;
  }

  delete(){

    this._activatedRoute.params.subscribe((data) => {

      this._postService.deleteBlog(data.Bid);
      

    });

  }
    

}
