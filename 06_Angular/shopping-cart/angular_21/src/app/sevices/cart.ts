import { Injectable, signal, computed } from '@angular/core';
import { CartItem, Product } from '../interfaces/shop';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems = signal<CartItem[]>([]);

  totalItemsCount = computed(() => this.cartItems().reduce((acc, item) => acc + item.quantity, 0));

  totalPrice = computed(() =>
    this.cartItems().reduce((acc, item) => acc + item.product.price * item.quantity, 0)
  );

  addToCart(product: Product) {
    this.cartItems.update((items) => {
      const existingItem = items.find((i) => i.product.id === product.id);

      if (existingItem) {
        return items.map((i) =>
          i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }

      return [...items, { product, quantity: 1 }];
    });
  }

  updateQuantity(productId: number, delta: number) {
    this.cartItems.update((items) => {
      return items
        .map((item) => {
          if (item.product.id === productId) {
            return { ...item, quantity: item.quantity + delta };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    });
  }
}
