import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-clients',
  templateUrl: './view-clients.component.html',
  styleUrls: ['./view-clients.component.css']
})
export class ViewClientsComponent implements OnInit {
  
  show: boolean = false;
  down: boolean = false;
  constructor() {}

  ngOnInit(): void {}


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
