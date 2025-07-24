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
import { FirebaseAuthService } from 'src/app/core/firebase/firebase-auth.service';

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
  user: User | null = null;
  private firebaseService = inject(FirebaseAuthService);
  private router = inject(Router);

  constructor() {
    addIcons({ medalOutline, logOutOutline });
  }
  
  ngOnInit() {
    this.user = this.firebaseService.getCurrentUser();
  }

  async onLogout() {
    this.firebaseService.logout().then(() => {
      this.router.navigate(['/auth'], { replaceUrl: true });
    });
  }
}
