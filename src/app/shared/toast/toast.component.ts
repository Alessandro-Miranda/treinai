import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IonToast } from "@ionic/angular/standalone";

@Component({
  selector: 'app-toast-alert',
  templateUrl: './toast.component.html',
  imports: [IonToast],
})
export class ToastComponent {
  @Input() isOpen = false;
  @Input() message = '';
  @Output() isOpenChange = new EventEmitter<boolean>();

  onToastDismissed() {
    this.isOpen = false;
    this.isOpenChange.emit(false);
  }
}
