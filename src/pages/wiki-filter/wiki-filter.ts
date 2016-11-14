import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

import { ResourceService } from '../../providers/resource.service';

@Component({
  selector: 'page-wiki-filter',
  templateUrl: 'wiki-filter.html'
})
export class WikiFilterPage {

    categories: Array<{name: string, isChecked: boolean}> = [];

    constructor(public viewCtrl: ViewController, 
                public resourceService: ResourceService) {
        //Categories
        this.resourceService.getCategories().then((data: Array<{name: string, isChecked: boolean}>) => {
            data.forEach(item => {
                this.categories.push({
                    name: item.name,
                    isChecked: item.isChecked
                });
            });
        })
    }

    dismiss(data?: any) {
        this.viewCtrl.dismiss(data);
    }
}