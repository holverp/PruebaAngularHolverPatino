import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  //@Input() public title:String --> import { Component, OnInit, Input } from '@angular/core'; --> <app-navbar [title]="atributo del ts"></app-navbar> --> comunicacion entre componentes

  constructor() { }

  ngOnInit() {
  }

}
