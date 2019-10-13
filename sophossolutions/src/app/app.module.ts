import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';

import { AppComponent } from './app.component';

import { APP_ROUTING } from './app.routes';

import { NavegadoresModule } from './navegadores/navegadores.module';
import { AdminTiendaModule } from './admin-tienda/admin-tienda.module';

import localeEsCo from '@angular/common/locales/es-CO';

registerLocaleData(localeEsCo, 'es-Co');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    NavegadoresModule,
    AdminTiendaModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-Co' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
