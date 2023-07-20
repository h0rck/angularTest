// import { Component, Input, OnInit , } from '@angular/core';

import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {
  
  @Input() nav! : any
  @Output() action = new EventEmitter<any>()
  width! : Number
  left! : Number

  public peridoSelecionado!: Number ;

  ngOnInit(): void {
      console.log(this.nav)
  
  }
  obterLocalizacao(evnet:Event, id:Number): void {
    this.action.emit(id)
    const botaoElement = evnet.target as HTMLElement;
    // passar action para a class

    document.querySelectorAll('a').forEach(element => {
      element.classList.remove('active')
    })

    botaoElement.classList.add('active');
  
    const botaoRect: DOMRect = botaoElement.getBoundingClientRect();

    this.left = botaoRect.left + 5;
    this.width = botaoRect.width;
  }
}
