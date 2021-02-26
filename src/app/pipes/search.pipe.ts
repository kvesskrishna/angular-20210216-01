import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    let users = value;
    let key = args[0];
    let result: any;
    result = users.filter(
      (user) =>
        user.fname.includes(key) ||
        user.mname.includes(key) ||
        user.lname.includes(key)
    );
    return result;
  }
}
