import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { from, Observable } from "rxjs";

class MyData {
  data:string = "";
  list:Person[] = [];
}

class Person {
  name:string;
  mail:string;
  tel:string;
}

@Injectable({
  providedIn: 'root'
})

export class MycheckService {
  
  private mydata:MyData = new MyData();

  constructor(private client:HttpClient) {
    let ob:Observable = from(fetch("/assets/data.json"));
    
    ob.subscribe((resp)=>{
      resp.json().then((val)=>{
        this.mydata = val;
      })
    })
  }
  
  ngOnInit(){}
  
  get(n:number){
    return this.mydata.list[n];
  }
  
  get list(){
    return this.mydata.list.map((v)=>{
      v.name = "*****";
      return v;
    });
  }
  
  get data(){
    return this.mydata.data;
  }
}
