import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  mockUser: User = {
    id: 1,
    name: 'Kuldip Parmar',
    age: 20,
    avatarUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
    isActive: false,
  };

  getUser(): Observable<User> {
    return of(this.mockUser);
  }
}
