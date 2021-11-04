import { Component, EventEmitter, Input,OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-answer-button',
  templateUrl: './answer-button.component.html',
  styleUrls: ['./answer-button.component.css']
})
export class AnswerButtonComponent implements OnInit,OnChanges {

  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit ejecutar")
  }
  ngOnChanges(changes:SimpleChanges): void {
    console.log("ngOnChanges ejecutar",changes)
  }
  @Input() answer:string | undefined
  @Output() buttonSelected:EventEmitter<any> = new EventEmitter()
  variablecualquiera=0;
  selectAnswer(){
    this.buttonSelected?.emit(this.answer)
    this.variablecualquiera++;
    console.log("Numero",this.variablecualquiera);
  }

}
