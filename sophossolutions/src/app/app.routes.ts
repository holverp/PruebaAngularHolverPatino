import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './admin-tienda/components/home/home.component';
import { ConsultarProductosComponent } from './admin-tienda/components/consultar-productos/consultar-productos.component';
import { ConsultarPedidosComponent } from './admin-tienda/components/consultar-pedidos/consultar-pedidos.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'consultar', component: ConsultarProductosComponent },
  { path: 'consultarPedidos', component: ConsultarPedidosComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);