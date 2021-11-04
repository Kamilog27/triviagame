import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(router:Router){
    this.router=router;
  }
  router:Router
  title = 'trivia';
  mivariable="hola como estas";
  names:string[]=[
    
  ]
  respueta:string="Respuesta 1";
  letras:string[]=[
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "ñ",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ]
  addName(){
    this.names.push(this.mivariable)
  }

  removeName(index:number){
    this.names.splice(index,1)
  }
  respuestaSeleccionada(ans:any){
    console.log("LLego aqui",ans)
    this.respueta="Nueva Respuesta"
  }

  routeToUrl(address:string){
    this.router.navigateByUrl('/'+address)
  } 
}
