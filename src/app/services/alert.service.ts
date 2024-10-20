import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private alertController: AlertController) {}

  async presentAlert(type: 'success' | 'error' | 'warning', message: string) {
    let header = '';

    switch (type) {
      case 'success':
        header = 'Success';
        break;
      case 'error':
        header = 'Error';
        break;
      case 'warning':
        header = 'Warning';
        break;
    }

    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}