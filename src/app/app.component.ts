import { Component, inject, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonModal,
  IonTitle,
  IonToolbar,
  ModalController,
} from '@ionic/angular/standalone';
import { TestDialogComponent } from './dialogs/test-dialog/test-dialog.component';
import { DialogStatus, messages, qrImages } from './dialogs/configs';
import { StatusDialogComponent } from './dialogs/status-dialog/status-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [
    FormsModule,
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonModal,
  ],
})
export class AppComponent {
  @ViewChild(IonModal) modal!: IonModal;

  modalController = inject(ModalController);

  async openQRModal(type: 'correct' | 'incorrect') {
    const modal = await this.modalController.create({
      component: TestDialogComponent,
      componentProps: { src: qrImages[type] },
      breakpoints: [0, 0.5, 0.8],
      initialBreakpoint: 0.5,
    });

    modal.present();

    const { data } = await modal.onDidDismiss();

    await this.openStatusModal(data ?? 'fail');
  }

  async openStatusModal(type: DialogStatus) {
    const modal = await this.modalController.create({
      component: StatusDialogComponent,
      componentProps: { message: messages[type] },
      breakpoints: [0, 0.5, 0.8],
      initialBreakpoint: 0.5,
    });

    modal.present();
  }
}
