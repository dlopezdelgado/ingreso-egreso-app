import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  crearUsuario(nombre: string, email: string, password: string) {

    this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(resp => {
        console.log(resp);

      })
      .catch(error => {
        console.error(error);
      });

  }
}
