import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { MaterialModule } from './material.module';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './core/auth.service';
import { RoutingModule } from './routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase, 'inertia'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    RoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private afs: AngularFirestore) {
    const settings = {timestampsInSnapshots: true};
    afs.app.firestore().settings(settings);
  }
}
