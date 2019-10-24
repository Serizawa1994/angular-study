import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  
  title:string;
  message:string;
  _switch:string;

  constructor() {
  }
  
  ngOnInit() {
    this.title = "Hello-app";
    this.message = "please type .....";
    this._switch = "one";
  }
  
  doSelect(val){
    this._switch = val;
  }
}
