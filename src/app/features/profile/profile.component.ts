import { Component, inject, OnInit } from '@angular/core';
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
import { AuthService } from 'src/app/core/auth/auth.service';
import { UserData } from 'src/app/core/auth/interfaces/user-data.interace';
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
  
  user!: UserData;

  constructor() {
    addIcons({ medalOutline, logOutOutline });
  }
  
  async ngOnInit() {
    this.user = await this.authService.getCurrentUser();
  }

  async onLogout() {
    this.authService.logout().then(() => {
      this.router.navigate(['/auth'], { replaceUrl: true });
    });
  }
}
