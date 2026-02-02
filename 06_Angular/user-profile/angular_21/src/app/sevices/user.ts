import { Injectable, signal } from '@angular/core';
import { User } from '../interfaces/user';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  user = signal<User>({
    id: 1,
    name: 'Kuldip Parmar',
    age: 20,
    avatarUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
    isActive: true,
  });
}
