import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './blogs/home/home.component';
import { CreatePostComponent } from './blogs/create-post/create-post.component';
import { ListPostsComponent } from './blogs/list-posts/list-posts.component';
import { NavbarComponent } from './mics/navbar/navbar.component';
import { PanelBoxComponent } from './mics/panel-box/panel-box.component';
import { RegisterComponent } from './auth/register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './auth/auth.service';
import { DetailComponent } from './blogs/detail/detail.component';
import { CommentsComponent } from './blogs/comments/comments.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { EditComponent } from './blogs/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CreatePostComponent,
    ListPostsComponent,
    NavbarComponent,
    PanelBoxComponent,
    RegisterComponent,
    DetailComponent,
    CommentsComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
