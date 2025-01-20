import { Component, effect, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  IonApp,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonRouterLink,
  IonRouterOutlet,
  IonSplitPane,
  IonAvatar,
  IonImg,
  Platform,
  NavController
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add, arrowUndoCircle, camera, chatboxEllipses, checkmarkCircle, close, documentText, exit, eye, home, images, informationCircle, logIn, menu, trash } from 'ionicons/icons';
import { User } from './auth/interfaces/user';
import { AuthService } from './auth/services/auth.service';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar, Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [
    RouterLink,
    RouterLinkActive,
    IonApp,
    IonSplitPane,
    IonMenu,
    IonContent,
    IonList,
    IonMenuToggle,
    IonItem,
    IonIcon,
    IonLabel,
    IonRouterLink,
    IonRouterOutlet,
    IonAvatar,
    IonImg
  ],
})
export class AppComponent {
  user = signal<User | null>(null);

  #authService = inject(AuthService);
  #platform = inject(Platform);
  #nav = inject(NavController);

  public appPages = [
    { title: 'Home', url: '/products', icon: 'home' },
    { title: 'Add product', url: '/products/add', icon: 'add' },
  ];

  constructor() {
    addIcons({ home, logIn, documentText, arrowUndoCircle, checkmarkCircle, trash, eye, close, menu, add, exit, camera, images, informationCircle, chatboxEllipses });

    effect(() => {
      if (this.#authService.logged()) {
        this.#authService.getProfile().subscribe((user) => (this.user.set(user)));
      } else {
        this.user.set(null);
      }
    });

    this.initializeApp();
  }

  async initializeApp() {
    if (this.#platform.is('capacitor')) {
      await this.#platform.ready();
      SplashScreen.hide();
      StatusBar.setBackgroundColor({ color: '#0054e9' });
      StatusBar.setStyle({ style: Style.Dark });
    }
  }

  async logout() {
    await this.#authService.logout();
    this.#nav.navigateRoot(['/auth/login']);
  }
}
