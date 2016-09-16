import {Component, ViewChild} from '@angular/core';
import {Platform, ionicBootstrap, MenuController, NavController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';

import {HomePage} from './pages/home/home';
import {ContactPage} from './pages/contact/contact';
import {AboutPage} from './pages/about/about';
import {SalereportPage} from './pages/salereport/salereport';
import {TabsPage} from './pages/tabs/tabs';
import {LoginPage} from './pages/login/login'

import * as helpers from './directives/helper';


@Component({
  templateUrl: 'build/app.html',
  providers: [NavController]
})
export class MyApp {
  @ViewChild('myNav') nav: NavController;
  private rootPage: any;
  private pages: any[];

  constructor(private platform: Platform, private menu: MenuController) {
    menu.enable(true);
    this.pages = [
      { title: 'Home', component: HomePage, icon: 'home' },
      { title: 'Contact', component: ContactPage, icon: 'users' },
      { title: 'About', component: AboutPage, icon: 'exclamation-circle' },
      { title: 'Sale Report', component: SalereportPage, icon: 'area-chart' }
    ];

    this.rootPage = TabsPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault;
    });
  }

  openPage(page) {
    this.menu.close()
    // Using this.nav.setRoot() causes
    // Tabs to not show!
    //this.nav.push(page.component);
    helpers.debounce(this.nav.setRoot(page.component), 60, false);
  };
}

ionicBootstrap(MyApp);
