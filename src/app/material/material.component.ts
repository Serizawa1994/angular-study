import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from "rxjs";
import { map } from "rxjs/operators";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {
  message:string;
  myControl:FormGroup;

  constructor() { }

  ngOnInit() {
    this.message = "please select button";
    this.myControl = new FormGroup({
      name: new FormControl(''),
      age: new FormControl(0),
      email: new FormControl('')
    });
  }
  
  change(v){
    this.message = "you select :" + v;
  }
  
  doClick(){
    this.message = JSON.stringify(this.myControl.value);
  }

}
