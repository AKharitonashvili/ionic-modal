import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import {
  IonContent,
  ModalController,
  IonButton,
} from '@ionic/angular/standalone';
import { DialogStatus } from '../configs';

@Component({
  selector: 'app-test-dialog',
  templateUrl: './test-dialog.component.html',
  styleUrls: ['./test-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonContent, IonButton],
})
export class TestDialogComponent {
  @Input() src!: string;

  modalController = inject(ModalController);

  handleError() {
    this.close('fail');
  }

  async close(type: DialogStatus) {
    this.modalController.dismiss(type);
  }
}
