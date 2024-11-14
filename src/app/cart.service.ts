import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from 'src/Cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private baseUrl: string = 'http://localhost:8089/cart';  // Adjust base URL for your API

  constructor(private http: HttpClient) {}

  // Method to add a cart
  addCart(cart: Cart): Observable<Cart> {
    return this.http.post<Cart>(`${this.baseUrl}/addCart`, cart);
  }
}
