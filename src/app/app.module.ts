import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { MessageComponent } from './message/message.component';
import { MystyleDirective } from './mystyle.directive';
import{ MycheckService } from "./mycheck.service";
import{ RouterModule,Routes } from "@angular/router";
import{ HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponent } from './material/material.component';
import { MatButtonModule } from "@angular/material";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatInputModule } from "@angular/material/input";

const routes:Routes = [
  {path: "material", component: MaterialComponent},
  {path: "hello", component: HelloComponent},
  {path: "msg", component: MessageComponent},
];
  
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    MessageComponent,
    MystyleDirective,
    MaterialComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
  ],
  
  bootstrap: [AppComponent],
})

export class AppModule { 
  
  constructor(){}
}
