import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject} from 'rxjs'; //, Observable, ReplaySubject 
import { ResourceService } from '../../providers/resource.service'
// import { Response } from '@angular/http';
import { CloudinayImageModel } from '../../models/cloudinayImage.model';

let optionsInitialState: any[] = []

@Injectable()
export class GalleryService {

    imagesList: Subject<CloudinayImageModel[]> = new BehaviorSubject<CloudinayImageModel[]>(optionsInitialState);

    constructor(private resourceService: ResourceService) {

    }

    getImageList(): void {
        this.resourceService.getImageList().subscribe((images: CloudinayImageModel[]) => {
            console.log(images);
            this.imagesList.next(images);
        });
    }
}