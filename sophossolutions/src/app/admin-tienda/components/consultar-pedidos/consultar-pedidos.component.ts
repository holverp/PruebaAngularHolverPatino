import { Component, OnInit, Input } from '@angular/core';

import { AppService } from '../../../app.service';

import { Pedido } from '../../../models/pedido';

@Component({
  selector: 'app-consultar-pedidos',
  templateUrl: './consultar-pedidos.component.html',
  styleUrls: ['./consultar-pedidos.component.css']
})
export class ConsultarPedidosComponent implements OnInit {

  public pedidos:Pedido[]=new Array();
  public pedido:Pedido;
  public filtroIdPedido:string;

  constructor(private appService: AppService) { }

  ngOnInit() {
    let i:number;
    for (i=1; i<=localStorage.length; i++){
      this.pedido = JSON.parse(localStorage.getItem("PED"+i));
      console.log(this.pedido.file);
      this.pedido.idPedido = "PED" + i;
      this.pedido.fechaNacimiento = new Date(2019,10-1,12);
      this.pedidos.push(this.pedido);
    }
    console.log(this.pedidos);
  }

}
