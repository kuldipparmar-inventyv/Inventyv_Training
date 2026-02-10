import { Component, inject } from '@angular/core';
import { AuthService } from '../../sevices/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);

  onLogin(u: string, p: string) {
    this.authService
      .login(u, p)
      .subscribe(() => this.router.navigate(['/home']));
  }
}
