import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { GalleryPage } from '../pages/gallery/gallery';
import { VideoPage } from '../pages/video/video';
import { WikiPage } from '../pages/wiki/wiki';
import { WikiFilterPage } from '../pages/wiki-filter/wiki-filter';
import { TabsPage } from '../pages/tabs/tabs';
import { APP_CONFIG, AppConfig } from './app.config';
import { ResourceService } from '../providers/resource.service'

@NgModule({
  declarations: [
    MyApp,
    GalleryPage,
    VideoPage,
    WikiPage,
    WikiFilterPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GalleryPage,
    VideoPage,
    WikiPage,
    WikiFilterPage,
    TabsPage
  ],
  providers: [
    { provide: APP_CONFIG, useValue: AppConfig }, ResourceService
  ]
})
export class AppModule {}
