import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  showMessage: boolean = false;

  logs: Date[] = [];
  enableWhiteText: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleShowMessage() {
    this.showMessage = !this.showMessage;
    this.logs.push(new Date());
    this.logs.length > 5
      ? (this.enableWhiteText = true)
      : (this.enableWhiteText = false);
  }
}
