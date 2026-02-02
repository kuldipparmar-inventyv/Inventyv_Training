import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './components/user-card/user-card';
import { UserService } from './sevices/user';
import { User } from './interfaces/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, UserCardComponent],
  templateUrl: './app.html',
})
export class AppComponent implements OnInit {
  userService: UserService = inject(UserService);

  ngOnInit() {
    console.log('Parent: Component initialized');
  }

  onStatusChange(isActive: boolean) {
    console.log('Parent: Status changed to', isActive);
  }
}
