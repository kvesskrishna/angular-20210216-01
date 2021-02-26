import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NameService } from '../services/name.service';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() num;
  @Output() decreq = new EventEmitter();
  @Output() increq = new EventEmitter();
  constructor(private ns: NameService) {}

  ngOnInit(): void {
    this.ns.setName('jack');
  }

  decNum() {
    // this.num--;
    this.decreq.emit(--this.num);
  }

  incNum() {
    // this.num++;
    this.increq.emit(++this.num);
  }
}
