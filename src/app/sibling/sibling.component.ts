import { Component, OnInit } from '@angular/core';
import { NameService } from './../services/name.service';
@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.css'],
})
export class SiblingComponent implements OnInit {
  constructor(private names: NameService) {}
  n: string;
  ngOnInit(): void {
    let n = this.names.name;
    this.n = n;
    console.log(n);
  }
}
