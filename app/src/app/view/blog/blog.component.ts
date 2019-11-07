import { Component, OnInit } from "@angular/core";
import { BlogService } from 'src/app/services/blog-service.component';
import { BlogPost } from 'src/app/model/blog-post.model';

@Component({
    selector: 'blog-component',
    templateUrl: './blog.component.html'
})
export class BlogComponent implements OnInit {

    public blogPosts: BlogPost[];

    constructor (
        public blogService: BlogService
    ) {}

    ngOnInit() {
        this.callBlogService();
    }

    callBlogService() {

        console.log('blog array', this.blogService.allPosts);
    }
}