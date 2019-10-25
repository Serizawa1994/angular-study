import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})

export class HelloComponent implements OnInit {
  
  title:string;
  message:string[];

  constructor() {}
  
  ngOnInit() {
    this.title = "Hello-app";
    this.message = [
      "新しいコンポーネントです。",
      "複数のメッセージを表示できます。",
      "属性は配列を設定します。"
      ];
  }
  
}
