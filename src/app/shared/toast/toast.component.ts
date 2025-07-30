import { Component, inject, OnInit } from '@angular/core';
import { IonToast } from "@ionic/angular/standalone";
import { ToastService } from './toast.service';

@Component({
  selector: 'app-toast-alert',
  templateUrl: './toast.component.html',
  imports: [IonToast],
})
export class ToastComponent implements OnInit {
  private toastService = inject(ToastService);

  isOpen = false;
  message = '';

  ngOnInit() {
    this.toastService.toast$.subscribe(({ message }) => {
      this.message = message;
      this.isOpen = true
    });
  }
  
  onToastDismissed() {
    this.isOpen = false;
  }
}
