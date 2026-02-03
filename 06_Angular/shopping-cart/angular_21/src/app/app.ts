import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list';
import { CartComponent } from './components/cart/cart';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent, CartComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}