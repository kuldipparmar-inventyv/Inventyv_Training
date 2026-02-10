import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  http = inject(HttpClient);

  login(username: string, password: string) {
    return this.http.post<any>('https://dummyjson.com/auth/login', {
      username,
      password  
    }).pipe(
      tap(res => {
        localStorage.setItem('token', res.accessToken);
      })
    );
  }

  getUser(){
    return this.http.get('https://dummyjson.com/auth/me');
  }

}