import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-pipe',
  templateUrl: './search-pipe.component.html',
  styleUrls: ['./search-pipe.component.css'],
})
export class SearchPipeComponent implements OnInit {
  users = [
    { fname: 'tom', mname: 'smith', lname: 'will' },
    { fname: 'joe', mname: 'golde', lname: 'pop' },
    { fname: 'jose', mname: 'nancy', lname: 'luke' },
    { fname: 'ill', mname: 'albert', lname: 'sam' },
    { fname: 'mike', mname: 'sam', lname: 'george' },
  ];
  key = '';
  constructor() {}

  ngOnInit(): void {}
}
