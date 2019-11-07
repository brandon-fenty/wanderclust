import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { BlogPost } from '../model/blog-post.model';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl;

@Injectable()
export class BlogService {
    allPosts: any[];

    constructor(private httpClient: HttpClient) {
        this.getAllPosts()
            .subscribe(res => this.allPosts = res);
    }

    public getAllPosts(): Observable<BlogPost[]> {
        let res = this.httpClient.get<BlogPost[]>(API_URL);
        return res;
    }
}
