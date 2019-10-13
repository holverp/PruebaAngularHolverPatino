import { Component, OnInit, Input } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { AppService } from '../../../app.service';

import { Producto } from '../../../models/producto';
import { Pedido } from '../../../models/pedido';

@Component({
  selector: 'app-consultar-productos',
  templateUrl: './consultar-productos.component.html',
  styleUrls: ['./consultar-productos.component.css']
})
export class ConsultarProductosComponent implements OnInit {

  public productos:Producto[]=new Array();
  public pedido:Pedido = new Pedido();
  public errorHttp:HttpErrorResponse = null;
  public errorAny:any = null;
  public imagenPopup:string;
  public isTouchCalendar:boolean;
  public filesToUpload: Array<File> = null;
  public isFilesToUpload: boolean = false;
  public file;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.isTouchCalendar=false;
    this.pedido.ciudad = "Medellín";
    this.appService.consultarProductos().subscribe(data => {
      console.log(data);
      this.productos=data;
      this.productos.sort((a, b) => {return a.idProducto - b.idProducto});
    }, error => {
      console.log(error);
      if (error instanceof HttpErrorResponse) {
        this.errorHttp=error;
      }else{
        this.errorAny=error;
      }
    });
  }

  public radicarPedido(producto:Producto){
    this.pedido.idProducto = producto.idProducto;
    this.filesToUpload = null;
    this.isFilesToUpload = false;
  }

  public radicar(){
    this.file = this.filesToUpload[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload = (event: any) => {
      this.pedido.file = reader.result.toString().split('base64,')[1];
    };
    reader.onerror = (error: any) => {
      console.log('Error: ', error);
    };
    localStorage.setItem("PED" + (localStorage.length+1).toString(), JSON.stringify(this.pedido));
  }

  public abrirImagen(producto:Producto):void{
    this.imagenPopup = producto.imagen;
  }

  touchCalendar(){
    this.isTouchCalendar = true;
  }

  public fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
    if (this.filesToUpload != null){
      this.isFilesToUpload = true;
    }
  }

}
