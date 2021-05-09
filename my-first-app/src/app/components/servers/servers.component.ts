import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationMessage: string = 'No server was created';

  serverName: string = '';
  serverCount: number = 1;

  constructor() {
    setTimeout(() => (this.allowNewServer = true), 2000);
  }

  ngOnInit(): void {}

  onClickAddServer() {
    this.serverCreationMessage =
      'Server created with name ' + this.serverName + ' !!!';
  }

  // Method used in the case of event binding in HTML Template
  // getServerName(event: Event) {
  //   console.log(event);
  //   this.serverName = (<HTMLInputElement>event.target).value;
  //   console.log(this.serverName);
  // }
}
