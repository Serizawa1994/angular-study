import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { MycheckService } from "../mycheck.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  providers: [MycheckService],
})

export class MessageComponent implements OnInit {
  content:string[];
  
  constructor(private service:MycheckService,
  private route:ActivatedRoute) {}

  ngOnInit() {
    this.service.push("message data");
    this.service.push("params: " + JSON.stringify(this.route.snapshot.paramMap));
    this.content = this.service.list;
  }

}
