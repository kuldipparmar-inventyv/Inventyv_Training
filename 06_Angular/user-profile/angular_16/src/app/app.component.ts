import { Component, OnInit } from '@angular/core';
import { UserService } from './sevices/user.service';
import { User } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  currentUser: User | undefined;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUser().subscribe((data) => {
      this.currentUser = data;
    });
  }

  onStatusChanged(isActive: boolean){
    console.log('Parent received status update:', isActive);
  }
}
