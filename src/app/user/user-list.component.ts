import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: Array<any>;

  constructor() {
    this.users = [
      {
        'name': 'Tony Stark',
        'username': 'tonystark'
      }, {
        'name': 'John Wick',
        'username': 'johnwick'
      }
    ];

  }

  ngOnInit() {
  }

}
