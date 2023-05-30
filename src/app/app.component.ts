import { Component } from '@angular/core';
import { ProductItem } from './clases/product-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba';

  producItemsId = [1,2,3,4,5,6]; 

  listaProductos:Array<ProductItem> = new Array<ProductItem>


  annadirProductos(){

    this.listaProductos.push(new ProductItem(1,"Lavadora","lavadora Bosh"));
    this.listaProductos.push(new ProductItem(1,"afeitadora","afeitadora philips"));
    this.listaProductos.push(new ProductItem(1,"secadora","secadora balay"));
    this.listaProductos.push(new ProductItem(1,"termomix","termomix Bosh"));
    this.listaProductos.push(new ProductItem(1,"batidora","batidora Bosh"));
    this.listaProductos.push(new ProductItem(1,"Ordenador","Portatil HP"));

  }

}


