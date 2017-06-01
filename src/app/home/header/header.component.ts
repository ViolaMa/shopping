import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userInfo = {
    name: '用户名',
    pwd: '',
    login: false
  }

  public keyWords: '';

  constructor() { }

  ngOnInit() {
  }

}
