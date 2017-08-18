import { Component, OnInit } from '@angular/core';
import { UserDetailService } from './user-detail.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  users: Array<any>;

  constructor(private userDetailService: UserDetailService) {
  }

  ngOnInit() {
    this.userDetailService.read().subscribe(users => {
      this.users = users;
    });



  }

}
