import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ImplicitReceiver } from '@angular/compiler';
import { HomeComponent } from './blogs/home/home.component';
import { AuthGuard } from './auth/auth.guard'; 
import { ListPostsComponent } from './blogs/list-posts/list-posts.component';
import { CreatePostComponent } from './blogs/create-post/create-post.component';
import { DetailComponent } from './blogs/detail/detail.component';




const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "welcome", component: HomeComponent, canActivate:[AuthGuard]},
  {path: "bloglist", component: ListPostsComponent, canActivate: [AuthGuard]},
  {path: "new", component: CreatePostComponent, canActivate: [AuthGuard]},
  {path: "detail/:Bid", component: DetailComponent, canActivate:[AuthGuard]},
  {path: "**", redirectTo: "welcome"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
