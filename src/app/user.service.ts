import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  username:string=""
  constructor() { }

  createUserName(name:string){
    this.username=name
    console.log("Aqui cambio", this.username)
  }
}
