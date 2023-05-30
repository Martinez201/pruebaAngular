import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

   @Input() productId :number = 0; // creo una variable para recogerlo del html (esto serua una directiva)

}
