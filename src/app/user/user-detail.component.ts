import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { UserRole } from '../models/user-role';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent  implements OnInit {

  @Input() user: User;

  addedUser: User;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.user = <User> {};
  };

  save(): void {

    this.userService
      .addNewUser(this.user)
      .subscribe(addedUser => {
        this.addedUser = addedUser;
      });
  };

}
