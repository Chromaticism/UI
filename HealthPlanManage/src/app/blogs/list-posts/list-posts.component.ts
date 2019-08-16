import { Component, OnInit } from '@angular/core';
import { PostService} from '../post.service';


@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {

  allBlogs : any = [];

  showComments : any = [];
  showEdit : any = [];

  constructor(private _postService : PostService) { }

  ngOnInit() {
    this._postService.getPost();

    this._postService.$blogs.subscribe((data: any) => {

      this.allBlogs = data;

      this.showComments = new Array(this.allBlogs.length).fill(false);
      this.showEdit = new Array(this.allBlogs.length).fill(false);
     
    });
  }

  commentToggle(index){
    this.showComments[index] = !this.showComments[index];
  }
  like(index){

    //console.log(this.allBlogs[index]);

    this._postService.likeThis(this.allBlogs[index]._id);

    
  }

  edit(blogId, index){
    this.showEdit[index] = !this.showEdit[index];
    console.log(blogId);
    //this._postService.editBlog(blogId,{tt: "hello"});
  }

  delete(blogId){
    this._postService.deleteBlog(blogId);
  }

}
