import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './view/blog/blog.component';
import { BlogService } from './services/blog-service.component';
import { HttpClientModule } from '@angular/common/http';
import { NavBar } from './common/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    NavBar
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    BlogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
