import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonIcon,
  IonInput,
  AlertController,
  IonRouterLink,
  NavController
} from '@ionic/angular/standalone';
import { AuthService } from '../services/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonIcon,
    IonInput,
    FormsModule,
    RouterLink,
    IonRouterLink
  ],
})
export class LoginPage {
  email = '';
  password = '';

  #authService = inject(AuthService);
  #alertCtrl = inject(AlertController);
  #navCtrl = inject(NavController);

  async login() {
    try {
      await this.#authService.login(this.email, this.password);
      this.#navCtrl.navigateRoot(['/products'])
    } catch {
      const alertRef = await this.#alertCtrl.create({
        header: 'Login error',
        message: 'Incorrect email and/or password',
        buttons: ['Ok'],
      });
      alertRef.present();
    }
  }
}
