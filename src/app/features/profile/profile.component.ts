import { Component, inject, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonNote,
  IonRow,
  IonText,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logOutOutline, medalOutline } from 'ionicons/icons';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  imports: [
    IonContent,
    IonCard,
    IonText,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
    IonButton,
    IonCardContent,
    IonNote,
  ],
})
export class ProfileComponent implements OnInit {
  user: User | null;
  private userService = inject(UserService);

  constructor() {
    this.user = this.userService.getCurrentUser();
    addIcons({ medalOutline, logOutOutline });
  }

  ngOnInit() {}
}
