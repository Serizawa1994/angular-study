import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
    this.message = "FormControlを使う"
  }
  
  onSubmit(val){
    this.message = JSON.stringify(val);
  }
}
