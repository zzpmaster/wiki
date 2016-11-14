import { Component } from '@angular/core';

import { WikiPage } from '../wiki/wiki';
import { GalleryPage } from '../gallery/gallery';
import { VideoPage } from '../video/video';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = WikiPage;
  tab2Root: any = GalleryPage;
  tab3Root: any = VideoPage;

  constructor() {

  }
}
