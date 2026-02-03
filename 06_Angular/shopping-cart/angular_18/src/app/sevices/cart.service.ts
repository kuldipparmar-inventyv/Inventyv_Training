import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { CartItem, Product } from '../interfaces/shop';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItemsSubject = new BehaviorSubject<CartItem[]>([]);

  cartItems$ = this.cartItemsSubject.asObservable();

  totalItemsCount$: Observable<number> = this.cartItems$.pipe(
    map((items) => items.reduce((acc, item) => acc + item.quantity, 0))
  );

  totalPrice$: Observable<number> = this.cartItems$.pipe(
    map((items) =>
      items.reduce((acc, item) => acc + item.product.price * item.quantity, 0)
    )
  );

  addToCart(product: Product): void {
    const currentItems = this.cartItemsSubject.value;
    const existingItem = currentItems.find((i) => i.product.id === product.id);

    if (existingItem) {
      const updatedItems = currentItems.map((item) =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      this.cartItemsSubject.next(updatedItems);
    } else {
      this.cartItemsSubject.next([...currentItems, { product, quantity: 1 }]);
    }
  }

  updateQuantity(productId: number, delta: number): void {
    const currentItems = this.cartItemsSubject.value;

    const updatedItems = currentItems
      .map((item) => {
        if (item.product.id === productId) {
          return { ...item, quantity: item.quantity + delta };
        }
        return item;
      })
      .filter((item) => item.quantity > 0);

    this.cartItemsSubject.next(updatedItems);
  }
}
