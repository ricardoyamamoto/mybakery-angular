import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserListService } from '../services/user-list.service';
import { User } from '../models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: Array<User>;

  constructor(
    private userListService: UserListService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userListService.readAll().subscribe(users => {
      this.users = users;
    });
  }

  goToDetail(): void {
    const link = ['/user-detail'];
    this.router.navigate(link);
  }

}
