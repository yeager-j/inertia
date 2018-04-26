import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from './classes/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import * as firebase from 'firebase';


@Injectable()
export class AuthService {
  user: Observable<User>;

  constructor(private afAuth: AngularFireAuth, private afStore: AngularFirestore, private router: Router) {
    this.user = afAuth.authState.switchMap((user) => {
      if (user) {
        return this.afStore.doc<User>(`users/${user.uid}`).valueChanges();
      } else {
        return Observable.of(null);
      }
    });
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.setUserData(credential.user);
      });
  }

  private setUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afStore.doc(`users/${user.uid}`);

    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    };

    return userRef.set(data, { merge: true });
  }

  updateUserData(uid: string, data: any) {
    const userRef: AngularFirestoreDocument<any> = this.afStore.doc(`users/${uid}`);

    return userRef.update(data);
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }
}
