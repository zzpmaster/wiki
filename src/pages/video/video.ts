import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-video',
  templateUrl: 'video.html'
})
export class VideoPage {
  slideOptions = {
    pager: true,
    loop: true
  };
  constructor(public navCtrl: NavController) {

  }

}
