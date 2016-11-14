import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { APP_CONFIG, IAppConfig } from '../app/app.config';
import { CloudinayImageModel } from '../models/cloudinayImage.model';

// import * as $ from 'jquery';
// import cloudinary from 'cloudinary-jquery';

@Injectable()
export class ResourceService {

    data: any;
    headers: Headers = new Headers();
    constructor(private http: Http, 
                @Inject(APP_CONFIG) private config: IAppConfig) {
        this.headers.append('Content-type', 'applicaiton/json');
    }

    loadJsonData() {
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(resolve => {
            this.http.get('assets/data/data.json').subscribe(res => {
                resolve(res.json());
            });
        });
    }

    interceptor(): RequestOptions {
        const opts: RequestOptions = new RequestOptions();
        opts.headers = this.headers;
        //btoa 转换成一个base64编码过的字符串
        // opts.headers.append('Authorization', 
        //     'Basic ' + btoa(this.config.cloudinaryApiKey + ':' + this.config.cloudinaryApiSecret)); 
        return opts;
    }

    getImageList(): Observable<CloudinayImageModel[]> {
        // cloudinary.config({ cloud_name: 'dgl86pzep', api_key: '152774418521856'})
        // var a = cloudinary.image('demo.json', {type: 'list'});
        // console.log(a);
        return this.http.get('/cloud/image/list/hotel.json', 
            this.interceptor()).map((res: Response) => <CloudinayImageModel[]> res.json().resources);
    }

    //TODO search
    getWikis() {
        return this.loadJsonData().then(data => {
            return data.Wiki;
        })
    }

    // get filter categories
    getCategories() {
        return this.loadJsonData().then(data => {
            return data.categories;
        });
    }
}