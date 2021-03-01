import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor(private route: ActivatedRoute, private http: HttpClient) {}
  user: any;
  name: any;
  ngOnInit(): void {
    console.log(this.route.snapshot.params.id);
    let id = this.route.snapshot.params.id;
    this.name = this.route.snapshot.params.name;
    this.http
      .get('https://jsonplaceholder.typicode.com/users/' + id)
      .subscribe((result) => {
        console.log(result);

        this.user = result;
      });
  }
}
