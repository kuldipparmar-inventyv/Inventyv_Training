import { Component, inject, OnInit, signal, Signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { UserService } from '../../sevices/user';
@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  imports: [CommonModule, MatToolbarModule, MatCardModule, MatIconModule, MatButtonModule],
})
export class HomeComponent implements OnInit {
  user = signal<any>(null);
  userService: UserService = inject(UserService);
  ngOnInit() {
    this.userService.getUser().subscribe((data: any) => {
      console.log('data', data);
      this.user.set(data);
    });
  }
}
