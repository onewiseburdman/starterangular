import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from '../interfaces/users';
import { NotifyService } from './notify.service';


@Injectable()
export class AuthService {
  user: Observable<User>;
  constructor(private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private notify: NotifyService) {
      //// Get auth data, then get firestore user document || null
      this.user = this.afAuth.authState.pipe(
        switchMap(user => {
          if (user) {
            return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
            
          } else {
            return of(null)
          }
        }))
  }
  
  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider()
    return this.oAuthLogin(provider);
  }

  facebookLogin() {
    const provider = new firebase.auth.FacebookAuthProvider();
    return this.oAuthLogin(provider);
  }

  twitterLogin() {
    const provider = new firebase.auth.TwitterAuthProvider();
    return this.oAuthLogin(provider);
  }


  emailLogin(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then( success => {
        this.router.navigate(['dashboard']);
      },
        (user) => {
        this.notify.update('Welcome to Firestarter!!!', 'success')
        return this.updateUserData(user); // if using firestore
      })
      .catch((error) => this.handleError(error) );
  }

  emailSignUp(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.notify.update('Welcome to Firestarter!!!', 'success');
        return this.updateUserData(user); // if using firestore
      })
      .catch((error) => this.handleError(error) );
  }

  resetPassword(email: string) {
    const fbAuth = firebase.auth();

    return fbAuth.sendPasswordResetEmail(email)
      .then(() => this.notify.update('Password update email sent', 'info'))
      .catch((error) => this.handleError(error));
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.updateUserData(credential.user)
      })
  }
  signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/']);
  });
    }
  
    private handleError(error: Error) {
      console.error(error);
      this.notify.update(error.message, 'error');
    }

    updateUser(user: User, data: any) { 
      return this.afs.doc(`users/${user.uid}`).update(data)
    }

  private updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data: User = {
      uid: user.uid,
      email: user.email,
      roles: {
        subscriber: true
      },
      userdetails:{
        firstName: null,
        middleName:  null,
        lastName:  null,
        mobileNumber: null,
        suffix: null,
      },
      useraddress: {
        address1: null,
        address2: null,
        city: null,
        state: null,
        zipcode: null,
        latitude: null,
        longitude: null,
      },
     
      usergenerals:{
        photoURL: null,
        motto: null,
        favoriteBook: null,
        graduatedFrom: null,
        graduatedYear: null,
        worksAt: null,
      }
    }
    return userRef.set(data), { merge: false
    }
  }
  ///// Role-based Authorization //////
  canRead(user: User): boolean {
    const allowed = ['admin', 'editor', 'subscriber', 'registered', 'superuser', 'public']
    return this.checkAuthorization(user, allowed)
  }

  canEdit(user: User): boolean {
    const allowed = ['admin', 'editor', 'superuser']
    return this.checkAuthorization(user, allowed)
  }

  canDelete(user: User): boolean {
    const allowed = ['admin', 'superuser']
    return this.checkAuthorization(user, allowed)
  }

  // determines if user has matching role
  private checkAuthorization(user: User, allowedRoles: string[]): boolean {
    if (!user) return false
    for (const role of allowedRoles) {
      if ( user.roles[role] ) {
        return true
      }
    }
    return false
  }


}