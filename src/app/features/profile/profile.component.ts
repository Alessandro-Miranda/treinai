import { Component, inject, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
import { Router } from '@angular/router';
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
import { AuthService } from 'src/app/core/firebase/auth.service';
import { DaysSincePipe } from './pipes/days-since.pipe';

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
    DaysSincePipe
  ],
})
export class ProfileComponent implements OnInit {
  private authService = inject(AuthService);
  private router = inject(Router);
  
  user!: User;
  userRegistrationDate = 0;

  constructor() {
    addIcons({ medalOutline, logOutOutline });
  }
  
  ngOnInit() {
    this.user = this.authService.getCurrentUser() as User;
    this.userRegistrationDate = new Date(this.user.metadata.creationTime!).getTime();
  }

  async onLogout() {
    this.authService.logout().then(() => {
      this.router.navigate(['/auth'], { replaceUrl: true });
    });
  }
}
