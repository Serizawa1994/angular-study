import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { MycheckService } from "../mycheck.service";
import { ActivatedRoute } from "@angular/router";
import { FormControl } from "@angular/forms";
import { fromEvent } from "rxjs";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  providers: [MycheckService],
})

export class MessageComponent implements OnInit {
  input:FormControl;
  message:string;
  
  @ViewChild("btn") btn: ElementRef;
  
  constructor(private service:MycheckService) {}

  ngOnInit() {
    this.input = new FormControl("");
    this.message = "mydata list.";
    
    const btn = this.btn.nativeElement;
    fromEvent(btn, "click")
    .subscribe((event:MouseEvent)=>{
      this.doAction();  
    })
  }
  
  getData(){
    return this.service.data;
  }
  
  getList(){
    return this.service.list;
  }
  
  doAction(){
    let n = parseInt(this.input.value);
    let p = this.service.get(n);
    this.message = JSON.stringify(p);
  }

}
