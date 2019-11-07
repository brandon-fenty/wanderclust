import { Inject, Injectable } from "@angular/core";

@Injectable()
export class Config {
    public server = 'http://localhost8080/';
    public url = 'api/';
    public endpoint = this.server + this.url;
}
