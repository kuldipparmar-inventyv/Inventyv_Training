import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CartService } from '../../sevices/cart';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, MatListModule, MatButtonModule, MatIconModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class CartComponent {
  cartService: CartService = inject(CartService);

  increase(id: number) {
    this.cartService.updateQuantity(id, 1);
  }

  decrease(id: number) {
    this.cartService.updateQuantity(id, -1);
  }
}
