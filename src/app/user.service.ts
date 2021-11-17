import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from './api-response.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userName:string=""
  token:string=""
  httpClient:HttpClient
  constructor(httpClient:HttpClient) { 
    this.httpClient=httpClient
  }
  async createRegisterRequest(name:string,password:string):Promise<ApiResponse>{
    const data=await this.httpClient.post("http://localhost:4001/players/register",{name,password}).toPromise()
    return {status:JSON.parse(JSON.stringify(data))["status"],message:JSON.parse(JSON.stringify(data))["message"],data:JSON.parse(JSON.stringify(data))["data"]}
  }
  async createLoginRequest(name:string,password:string):Promise<ApiResponse>{
    const data=await this.httpClient.post("http://localhost:4001/players/login",{name,password}).toPromise()
    return {status:JSON.parse(JSON.stringify(data))["status"],message:JSON.parse(JSON.stringify(data))["message"],data:JSON.parse(JSON.stringify(data))["data"]}
  }

  checkLoginUser():boolean{
    const userName=localStorage.getItem("userName")
    const token=localStorage.getItem("token")
    if(userName!=null&& token!=null){
      this.userName=userName
      this.token=token
      return true
    }
    return false
  }
  async createUserName(name:string,password:string):Promise<boolean>{
    const registerReponse:ApiResponse=await this.createRegisterRequest(name,password)
    if(registerReponse.status==false){
      const loginResponse=await this.createLoginRequest(name,password)
      console.log(loginResponse)
      if(loginResponse.status==true){
        localStorage.setItem("userName",name)
        localStorage.setItem("token",loginResponse.data.token)
        return true
      }
      return false
    }
    localStorage.setItem("userName",name)
    localStorage.setItem("token",registerReponse.data.token)
    return true
  }
  signOut(){
    this.userName=""
    localStorage.removeItem("userName")
  }
}


