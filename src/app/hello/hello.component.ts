import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  
  title:string;
  message:string;
  data:string[];

  constructor() {
  }
  
  ngOnInit() {
    this.title = "Hello-app";
    this.message = "please type .....";
    this.data = ["最初の項目です",
                "２番目の項目です",
                "最後の項目です"];
  }
}
