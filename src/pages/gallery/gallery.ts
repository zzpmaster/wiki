import { Component, OnInit } from '@angular/core';
import { LoadingController, Loading } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { GalleryService } from './gallery.service';
import { CloudinayImageModel } from '../../models/cloudinayImage.model';

@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
  providers: [ GalleryService ]
})

export class GalleryPage implements OnInit {

  cloudinayImages: CloudinayImageModel[] = [];
  loader: Loading;

  constructor(public navCtrl: NavController, 
              public galleryService: GalleryService, 
              public loadingCtrl: LoadingController) {
    galleryService.imagesList.subscribe((list: CloudinayImageModel[]) => {
      this.cloudinayImages = list;
      if (this.loader)
        this.loader.dismissAll();
    })
  }

  loadImages(): void {
    this.galleryService.getImageList();
  }

  ngOnInit() {
  }

  ionViewDidLoad() {
    this.presentLoading();
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: 'Loading Gallery...'
    });
    this.loader.present().then(() => {
      this.loadImages();
    });
  }

}
