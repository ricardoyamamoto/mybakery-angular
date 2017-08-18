import { Component, OnInit } from '@angular/core';
import { UserListService } from './user-list.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: Array<any>;

  constructor(private userListService: UserListService) {
  }

  ngOnInit() {
    this.userListService.readAll().subscribe(users => {
      this.users = users;
    });



  }

}
