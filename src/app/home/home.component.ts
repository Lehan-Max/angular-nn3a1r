import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 teams =['CSK','RR','RCB','MI','SRH','KXIP','DC']
  constructor() { }
  teamname
  ngOnInit() {}

  
  
  getPlayers(event){
    this.teamname=event.target.value;
    if(this.teamname){
      console.log("selected team",this.teamname)
    }
  }

}