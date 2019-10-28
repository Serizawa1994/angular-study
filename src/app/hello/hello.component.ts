import { Component, OnInit, ViewChild } from '@angular/core'; 
import { MycheckService } from '../mycheck.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
  providers: [MycheckService],
})

export class HelloComponent implements OnInit {
  
  title:string;
  message:string;

  constructor(private route: ActivatedRoute) {}
  
  ngOnInit() {
    this.title = "Hello-app";
    this.message = "params :" + JSON.stringify(this.route.snapshot.queryParamMap);
  }
}
