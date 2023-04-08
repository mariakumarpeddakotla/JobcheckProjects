import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.css']
})
export class ClientHomeComponent implements OnInit {
  show: boolean = false;
  down: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showpop(){
    this.show=true;

  }
  hide(){
    this.show=false;
  }

  showpop1(){
    this.down=true;

  }
  hide1(){
    this.down=false;
  }

}
