import { Component, OnInit, ViewChild } from '@angular/core'; 
import { MessageComponent } from '../message/message.component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})

export class HelloComponent implements OnInit {
  
  title:string;
  message:string[];
  lastTarget:any;
  lastColor:string;
  input1:FormControl;
  
  @ViewChild(MessageComponent)
  private msgComponent: MessageComponent;

  constructor() {}
  
  ngOnInit() {
    this.title = "Hello-app";
    this.message = ["First item", "Second item", "Third item"];
    this.input1 = new FormControl('');
  }
  
  push(){
    if(this.input1.value == ""){
      alert("テキストを入力してください");
      return
    }
    
    this.msgComponent.push(this.input1.value);
    this.input1 = new FormControl('');
  }
  
  pop(){
    this.msgComponent.pop();
  }
  
  doClick(event){
    if(this.lastTarget != null){
      this.lastTarget.style.color = this.lastColor;
      this.lastTarget.style.backgroundColor = "white";
    }
    
    this.lastTarget = event.target;
    this.lastColor = event.target.style.color;
    event.target.style.color = "white";
    event.target.style.backgroundColor = "red";
  }
  
}
