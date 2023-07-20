import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nav = [
    {
      nome : `japa`,
      id : 24
    },
    {
      nome : `xenego`,
      id : 0
    },
    {
      nome : `horck`,
      id : 23
    },
    {
      nome: `japaNEt`,
      id: 100
    }
    
  ]

  public test!: Number;

  
  pegaEvento(t:Number){
    this.test = t
    console.log('pegaEvento: ',t);
  }
}





  
