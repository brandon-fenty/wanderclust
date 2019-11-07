import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { BlogPost } from '../model/blog-post.model';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl;

@Injectable()
export class BlogService {
    private apiUrl: string;

    constructor(private httpClient: HttpClient) {
    }

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
    };

    public getAll(): Observable<BlogPost> {
        return this.httpClient.get<BlogPost>(API_URL).pipe();
    }
}
