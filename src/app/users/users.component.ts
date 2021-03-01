import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(private http: HttpClient) {}
  response: any;
  id: number;
  title: string;
  body: string;
  users: any;
  ngOnInit(): void {
    // GET request
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((result) => {
        console.log(result);

        this.users = result;
      });
  }
  submit() {
    let request = {
      userId: this.id,
      title: this.title,
      body: this.body,
    };
    // POST request
    this.http
      .post('https://jsonplaceholder.typicode.com/posts', request)
      .subscribe((result) => {
        console.log(result);
        this.response = result;
      });
  }
}
