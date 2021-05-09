import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  username: string = '';

  constructor() {}

  ngOnInit(): void {}

  isUsernameEmtpy(): boolean {
    if (this.username === '') {
      return true;
    }
    return false;
  }

  clearUsername() {
    this.username = '';
  }
}
