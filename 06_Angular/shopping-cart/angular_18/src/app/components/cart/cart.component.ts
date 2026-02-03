import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CartService } from '../../sevices/cart.service';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, MatListModule, MatButtonModule, MatIconModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  constructor(public cartService: CartService) {}

  increase(id: number): void {
    this.cartService.updateQuantity(id, 1);
  }

  decrease(id: number): void {
    this.cartService.updateQuantity(id, -1);
  }
}
