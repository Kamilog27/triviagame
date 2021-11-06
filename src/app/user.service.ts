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
    localStorage.setItem("userName",this.username)
  }
  checkLogInUser():boolean{
    const name=localStorage.getItem("userName")
    if(name!=null){
      this.username=name
      return true
    }
    else{
      return false
    }
  }
  signOut(){
    this.username=""
    localStorage.removeItem("userName")
  }
}
