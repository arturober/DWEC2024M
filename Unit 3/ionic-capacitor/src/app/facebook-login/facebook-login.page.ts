import { Component, OnInit } from '@angular/core';
import {
  FacebookLogin,
  FacebookLoginResponse,
} from '@capacitor-community/facebook-login';
import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonRow,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-facebook-login',
  templateUrl: './facebook-login.page.html',
  styleUrls: ['./facebook-login.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonTitle,
    IonToolbar,
    IonRow,
    IonCol,
  ],
})
export class FacebookLoginPage implements OnInit {
  accessToken = '';

  constructor() {}

  async ngOnInit() {
    const resp =
      (await FacebookLogin.getCurrentAccessToken()) as FacebookLoginResponse;
    if (resp.accessToken) {
      this.accessToken = resp.accessToken.token;
    }
  }

  async login() {
    const resp = (await FacebookLogin.login({
      permissions: ['email'],
    })) as FacebookLoginResponse;
    if (resp.accessToken) {
      this.accessToken = resp.accessToken.token;
    }
  }

  async logout() {
    await FacebookLogin.logout();
    this.accessToken = '';
  }
}
