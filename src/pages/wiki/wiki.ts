import { Component, ElementRef, OnInit } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';

import { ResourceService } from '../../providers/resource.service';
import { WikiFilterPage } from '../wiki-filter/wiki-filter';

// import * as $ from 'jquery';

@Component({
  selector: 'page-wiki',
  templateUrl: 'wiki.html'
})
export class WikiPage implements OnInit {

  wikis: any = [];

  constructor(public navCtrl: NavController, 
              private _elRef: ElementRef,
              public modalCtrl: ModalController,
              public resourceService: ResourceService) {
  }

  ngOnInit(): any {
    // $('button').bind('click', function() {
    //   alert('It work!');
    // })
  }

  ngAfterViewInit() {
    this.updateWikiData();
  }

  updateWikiData() {
    this.resourceService.getWikis().then(data => {
      this.wikis = data;
      console.log(this.wikis);
    });
  }

  presentFilter() {
    let modal = this.modalCtrl.create(WikiFilterPage);
    modal.present();

    modal.onDidDismiss((data: any[]) => {
      if (data) {

      }
    });
  }

}
