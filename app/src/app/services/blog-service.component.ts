import { Injectable } from "@angular/core";
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';

import { Config } from './config.component';
import { Observable } from 'rxjs';
import { BlogPost } from '../model/blog-post.model';

@Injectable()
export class BlogService {
    private url: string;

    constructor(private httpClient: HttpClient, private config: Config) {
        this.url = config.endpoint;
    }

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
    };

    public getAll(): Observable<BlogPost> {
        return this.httpClient.get<BlogPost>(this.url).pipe();
    }
}
