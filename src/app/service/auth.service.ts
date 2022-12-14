import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<any>;

  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
  }

  signup(email: string, password: string){
    this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then(value =>{
        console.log('Registration success!', value);
      })
      .catch(err =>{
        console.log('error:', err.message);
      })
  }

  login(email: string, password: string){
    this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then(value =>{
        console.log('Login success!', value);
      })
      .catch(err =>{
        console.log('error:', err.message);
      })
  }

  logout(){
    this.firebaseAuth.signOut();
    console.log('Logout success!');

  }
}
