import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { MycheckService } from "../mycheck.service";
import { ActivatedRoute } from "@angular/router";
import { FormControl } from "@angular/forms";
import { fromEvent } from "rxjs";
import { filter } from "rxjs/operators";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  providers: [MycheckService],
})

export class MessageComponent implements OnInit {
  input:FormControl;
  message:string;
  
  @ViewChild("btn",{static:true}) btn: ElementRef;
  @ViewChild("check",{static:true})check: ElementRef;
  
  constructor(private service:MycheckService) {}

  ngOnInit() {
    this.input = new FormControl('');
    this.message = "mydata list.";
    const btn = this.btn.nativeElement;
    const check = this.check.nativeElement;
    
    fromEvent(btn, "click")
    .pipe(filter((res:MouseEvent, n:number)=>{
      console.log(n);
      if(res.shiftKey){
        return false;
      }
      return true;
    }))
    .subscribe((event:MouseEvent)=>{
      this.doAction();
    });
    
    fromEvent(check, "change")
    .subscribe((event:MouseEvent)=>{
      this.updateData(check.checked);
    });
  }
  
  updateData(ck:boolean){
    this.service.updateData(ck);
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
