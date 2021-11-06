import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  currentQuestion:string="Lorem, ipsum dolor sit amet consectetur adipisicing elit.Magni soluta officia dignissimos, veritatis ea ab perspiciatis officiis temporibus, culpa molestiae esse repellendus quasi molestias ipsam doloribus.Adipisci expedita deleniti corrupti."
  answerOptions:string[]=[
    "Opcion 1",
    "Opcion 2",
    "Opcion 3",
    "Opcion 4"
  ]
  correctAnswer:string="Opcion 3"
  constructor() { }
}
