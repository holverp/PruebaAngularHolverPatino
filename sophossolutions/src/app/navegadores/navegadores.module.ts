import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { APP_ROUTING } from '../app.routes';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    APP_ROUTING
  ],
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class NavegadoresModule { }
