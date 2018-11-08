import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthProvider {

  constructor(private afAuth:AngularFireAuth) {
    
  }

  loginUser(email:string, password:string){
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then(user=>Promise.resolve(user))
    .catch(err=>Promise.reject(err))
  }

  // Devuelve la session
  get Session(){
    return this.afAuth.authState;
  }

   // Logout de usuario
  logout(){
    this.afAuth.auth.signOut().then(()=>{
  })
}

}
