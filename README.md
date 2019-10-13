# Sophossolutions

- Este proyecto es generado con [Angular CLI](https://github.com/angular/angular-cli) version 8.3.8.

## Descripción de la Aplicación

- Tiene dos modulos **AdminTiendaModule** y **NavegadoresModule**. En el primero se encuentran los componentes de negocio de la aplicación y en el segundo los componentes de navegación (barra de navegación y pie de página).
- El componente **NavbarComponent** es la barra de navegación en la parte superior.
- El componente **FooterComponent** es el pie de página en la parte inferior.
- El componente **HomeComponent** es la página principal y tiene un mensaje de bienvenida.
- El componente **ConsultarProductosComponent** es la consulta de los productos y por la cual se pueden radicar los pedidos.
- El componente **ConsultarPedidosComponent** es la consulta de los pedidos.

## Desplegar la Aplicación

- Clonar el repositorio en una carpeta de trabajo `git clone https://github.com/holverp/PruebaAngularHolverPatino.git`
- Desde Visual Studio Code abrir la carpeta **sophossolutions** como worksapace.
- Ejecutar en la terminal `npm install` y luego `npm update`
- Ejecutar `ng serve` y en **Google Chrome** abrir la página `http://localhost:4200/`

## Generar Build

- Ejecutar `ng build` y copiar la carpeta **sophossolutions** que esta en la carpeta **dist** al servidor de preferencia como por ejemplo nginx, configurar puertos y directorios para ejecutar la aplicación.

## Autor

> Holver Esneider Patiño Cardona CC:1036780731
