import { Component, OnInit, ViewChild } from '@angular/core'; 
import { MycheckService } from '../mycheck.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

class MyData {
  data:string;
}

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
  providers: [MycheckService],
})

export class HelloComponent implements OnInit {
  
  title:string;
  message:string;
  private mydata:MyData;

  constructor(private client: HttpClient, private service:MycheckService) {
    this.mydata = new MyData();
  }
  
  ngOnInit() {
    this.title = "Hello-app";
    this.message = "wait...."
    setTimeout(()=>this.getData(),5000);
  }
  
  getData(){
    this.message = this.service.data;
  }
  
}
