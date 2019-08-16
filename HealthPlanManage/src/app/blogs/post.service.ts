import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class PostService {

  $blogs = new Subject();
  $comments = new Subject();
  getPost(){

    this._http.get("http://localhost:8080/blogs").subscribe((data: any) => {

      if(data.success){  

        //console.log(data);
        this.$blogs.next(data.data);
        
  
      }else{
        alert("something wrong");
        return false;
      }

    });
    

  }

  saveBlog(blog){

    this._http.post("http://localhost:8080/newblog", blog).subscribe((data: any) => {

      if(data.success){  

        this._router.navigate(['/bloglist']);
  
      }else{
        alert("Something wrong");
        return false;
      }


    })


  }


  likeThis(blogId){

    this._http.post("http://localhost:8080/like", {blogId: blogId}).subscribe((data: any) => {

      if(data.success){  

       alert("Thank you for like this");
       this.getPost();
       
      }else{
        alert("Something wrong");
        return false;
      }


    })

  }

  editBlog(blogId,newblog){

    this._http.post("http://localhost:8080/edit", {blogId: blogId, newBlog: newblog}).subscribe((data: any) => {


    });
  }

  deleteBlog(blogId){

    this._http.post("http://localhost:8080/delete", {blogId: blogId}).subscribe((data: any) => {

      if(data.success){  

       alert("Delete Success");
       this.getPost();
       this._router.navigate(['/bloglist']);
       
      }else{
        alert("Something wrong");
        return false;
      }


    })

  }

  //------add comment

  createComment(blogId, comment){

    this._http.post("http://localhost:8080/newcomment", {blogId: blogId, comment: comment}).subscribe((data: any) => {

      if(data.success){  

       alert("Comment Success");
       this.getPost();
       //this._router.navigate(['/bloglist']);
       
      }else{
        alert("Something wrong");
        return false;
      }


    })

  }


  getComments(comments){

    //console.log(comments);

    this._http.post("http://localhost:8080/comments",{blds: comments}).subscribe((data: any)=> {

      
      if(data.success){  

       // console.log(data);
        this.$comments.next(data.data);
        
  
      }else{
        alert("something wrong");
        return false;
      }

    });

  }



  constructor(private _router : Router, private _http : HttpClient) { }
}
