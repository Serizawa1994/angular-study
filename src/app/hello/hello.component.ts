import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})

export class HelloComponent implements OnInit {
  
  title:string;
  message:string;

  constructor() {}
  
  ngOnInit() {
    this.title = "Hello-app";
    this.message = "one,two,three,four,five,six,sevem,eight,nine,ten";
  }
  
}
