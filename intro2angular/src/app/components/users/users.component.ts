import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service"

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  hobby: hobby;

  constructor(private data: DataService) {
    this.name = 'zak';
    this.age = 20;
    this.email = 'zakadmaster@gmail.com';
    this.hobby = {
      hobby1: 'sport',
      hobby2: 'games',
      hobby3: 'code',
    };
  }

  ngOnInit() {}

  onClick() {
    console.log('STOP PRESSING ME');
  }
}

interface hobby {
  hobby1: string;
  hobby2: string;
  hobby3: string;
}
