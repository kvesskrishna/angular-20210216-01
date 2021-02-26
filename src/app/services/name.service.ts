import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NameService {
  name: string = 'john';
  constructor() {}
  setName(n) {
    this.name = n;
  }
}
