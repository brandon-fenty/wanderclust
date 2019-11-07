import { Component, OnInit } from "@angular/core";
import { BlogService } from 'src/app/services/blog-service.component';
import { BlogPost } from 'src/app/model/blog-post.model';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Config } from 'src/app/services/config.component';

@Component({
    selector: 'blog-component',
    templateUrl: './blog.component.html'
})
export class BlogComponent implements OnInit {

    public blogPosts: BlogPost;

    constructor (
        private blogService: BlogService
    ) {}

    ngOnInit() {
        this.callBlogService();
    }

    callBlogService() {
        this.blogService.getAll().subscribe((data: BlogPost) => {
            this.blogPosts = data;
        });

        console.log(this.blogPosts);
    }
}