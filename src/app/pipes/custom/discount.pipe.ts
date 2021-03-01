import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
})
export class DiscountPipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): unknown {
    console.log(value, args);
    let discount: any = args[0];
    let tax: any = args[1];
    value = parseInt(value);
    let price = value - (discount / 100) * value + (tax / 100) * value;
    return price;
  }
}
