import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  down: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  showpop1(){
    this.down=true;

  }
  hide1(){
    this.down=false;
  }

}
