import { Pipe, PipeTransform } from '@angular/core';
import {Product} from "../models/product"

@Pipe({
  name: 'sumPrice',
  standalone: true
})
export class SumPricePipe implements PipeTransform {

  transform(products: Product | Product[]): number {
    if (!Array.isArray(products)) {
      return products.price * products.quantity!;
    } else {
      return products.reduce((acc, product) => acc + product.price * product.quantity!, 0);
    }
  }

}
