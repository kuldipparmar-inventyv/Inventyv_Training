import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../sevices/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  user: any = null;
  userService: UserService = inject(UserService);
  ngOnInit() {
    this.userService.getUser().subscribe((data) => {
      console.log('data', data);
      this.user = data;
    });
  }
}
