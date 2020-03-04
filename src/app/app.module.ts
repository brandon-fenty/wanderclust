import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogService } from './service/blog.service';
import { HttpClientModule } from '@angular/common/http';
import { BlogComponent } from './components/blog/blog.component';
import DateUtil from './utility/date-util';
import { CreatePostComponent } from './create-post/create-post.component';
import { FroalaViewModule, FroalaEditorModule} from 'angular-froala-wysiwyg';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    CreatePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot()
  ],
  providers: [
    BlogService,
    DateUtil
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
