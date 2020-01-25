import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/service/blog.service';
import { BlogPost } from 'src/app/model/blog-post.model';

@Component({
  selector: 'app-blog-component',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  public allPosts: BlogPost[];

  constructor(
    private blogService: BlogService
  ) { }

  ngOnInit() {
    this.callServices();
  }

  callServices() {
    this.getBlogPosts();
  }

  getBlogPosts() {
    this.blogService.getAllPosts().subscribe(res => this.allPosts = res);
  }
}
