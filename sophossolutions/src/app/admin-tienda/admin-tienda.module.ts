import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppService }   from '../app.service';

import { FilterPipe } from '../app.pipe';

import { HomeComponent } from './components/home/home.component';
import { ConsultarProductosComponent } from './components/consultar-productos/consultar-productos.component';
import { ConsultarPedidosComponent } from './components/consultar-pedidos/consultar-pedidos.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  declarations: [
    HomeComponent,
    ConsultarProductosComponent,
    ConsultarPedidosComponent,
    FilterPipe
  ],
  exports: [
    HomeComponent,
    ConsultarProductosComponent,
    ConsultarPedidosComponent,
    FilterPipe
  ],
  providers: [
    AppService
  ]
})
export class AdminTiendaModule { }
