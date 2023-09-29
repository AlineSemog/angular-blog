import { Component, Input, OnInit, } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  photoCover:string ="https://media.seudinheiro.com/uploads/2023/02/o-senhor-dos-aneis.jpg"

  @Input()
  cardTitle: string ="Sociedade do Anel"

  @Input()
  Id:string="0"


  constructor() { }

  ngOnInit(): void {
  }

}
