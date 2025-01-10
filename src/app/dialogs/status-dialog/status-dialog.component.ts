import { Component, Input } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-status-dialog',
  templateUrl: './status-dialog.component.html',
  styleUrls: ['./status-dialog.component.scss'],
  imports: [IonContent],
})
export class StatusDialogComponent {
  @Input() message!: string;
}
