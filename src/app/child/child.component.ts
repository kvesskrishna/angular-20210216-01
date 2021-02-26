import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() num;
  @Output() decreq = new EventEmitter();
  @Output() increq = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  decNum() {
    // this.num--;
    this.decreq.emit(--this.num);
  }

  incNum() {
    // this.num++;
    this.increq.emit(++this.num);
  }
}
