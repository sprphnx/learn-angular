import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationMessage: string = 'No server was created';

  serverCount: number = 1;

  constructor() {
    setTimeout(() => (this.allowNewServer = true), 2000);
  }

  ngOnInit(): void {}

  onClickAddServer() {
    this.serverCreationMessage = this.serverCount++ + ' Server created!!!';
  }

  getServerName(event) {
    console.log(event);
  }
}
