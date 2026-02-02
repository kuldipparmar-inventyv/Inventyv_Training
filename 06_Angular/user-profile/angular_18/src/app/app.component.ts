import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserService } from './sevices/user.service';
import { User } from './interfaces/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, UserCardComponent],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  currentUser: User | undefined;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe((data: any) => {
      this.currentUser = data;
    });
  }

  onStatusChanged(isActive: boolean): void {
    console.log('Parent received status update:', isActive);
  }
}
