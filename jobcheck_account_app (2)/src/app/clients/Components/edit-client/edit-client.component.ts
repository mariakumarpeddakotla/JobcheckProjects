import { Component, OnInit } from '@angular/core';
// import * as L from 'leaflet';


@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  // show: boolean = false;
  down: boolean = false;
  constructor() {}

  ngOnInit(): void {}

 

  showpop1(){
    this.down=true;

  }
  hide1(){
    this.down=false;
  }
}




