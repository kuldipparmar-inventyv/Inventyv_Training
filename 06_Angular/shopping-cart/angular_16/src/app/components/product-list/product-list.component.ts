import { Component, signal } from '@angular/core';
import { CartService } from 'src/app/sevices/cart.service';
import { Product } from '../../interfaces/shop';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Laptop',
      price: 999,
      image: 'https://cdn.mos.cms.futurecdn.net/qTdLxePnEU4tJBRmh8YGqQ.jpg',
    },
    {
      id: 2,
      name: 'Phone',
      price: 699,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm5hHANz6aT-5NcugwT6goIfCECJFzLUW4pQ&s',
    },
    {
      id: 3,
      name: 'Headphones',
      price: 199,
      image:
        'https://www.unboxify.in/cdn/shop/products/51zL2U_3bDL._SL1200.jpg?v=1694963807',
    },
    {
      id: 4,
      name: 'Watch',
      price: 299,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHmSg-Rh0qYEhyxqq2KHMMQkyBrN0_6Gjr-w&s',
    },
  ];

  constructor(public cartService: CartService) {}

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }
}
