import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AnalyticsService } from './analytics.service';
import { Router, NavigationStart } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private analyticsService: AnalyticsService,
    public router: Router,
    private title: Title,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.analyticsService.startTrackerWithId('UA-113298293-2');
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.router.events
    .subscribe(event => {
      if (event instanceof NavigationStart) {
        let title = this.title.getTitle();
        if (this.router.getCurrentNavigation().extras.state) {
          title = this.router.getCurrentNavigation().extras.state.title;
        }
        this.analyticsService.trackView(event.url, title);
      }
    });
  }
}
