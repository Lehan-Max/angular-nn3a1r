import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  message = 'WELCOME TO ANGULAR'
  clickMe(){
    alert("Bootstap working");
  }
}
