import { Component, DestroyRef, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LocalNotifications } from '@capacitor/local-notifications';
import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonList,
  IonMenuButton,
  IonRow,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-local-notifications',
  templateUrl: './local-notifications.page.html',
  styleUrls: ['./local-notifications.page.scss'],
  standalone: true,
  imports: [
    FormsModule,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonButton,
    IonMenuButton,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonInput,
    IonRow,
    IonCol,
  ],
})
export class LocalNotificationsPage {
  message = '';
  triggered = signal(false);
  scheduled = signal(false);

  #destroyRef = inject(DestroyRef);

  constructor() {
    this.listenLocalNotifications();
    this.#destroyRef.onDestroy(() => LocalNotifications.removeAllListeners());
  }

  async listenLocalNotifications() {
    const permStatus = await LocalNotifications.checkPermissions();
    if(permStatus.display !== "granted") {
      await LocalNotifications.requestPermissions();
    }

    // When the user taps on the notification
    LocalNotifications.addListener(
      'localNotificationActionPerformed',
      (notif) => {
        this.triggered.set(true);
        this.scheduled.set(false);
      }
    );
  }

  async createNotification() {
    await LocalNotifications.schedule({
      notifications: [
        {
          id: 1, // Unique id
          title: this.message,
          body: 'This is a local notification generated by Capacitor',
          schedule: { at: new Date(new Date().getTime() + 10000) },
        },
      ],
    });
    this.scheduled.set(true);
    this.triggered.set(false);
  }

  async cancelNotification() {
    try {
      await LocalNotifications.cancel(await LocalNotifications.getPending());
    } finally {
      this.scheduled.set(false);
    }
  }
}