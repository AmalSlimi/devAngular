import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/models/Product';


@Injectable({
  providedIn: 'root',
})
export class ProductionService {
  private baseUrl: string = 'http://localhost:8089/productions';  // Adjust base URL for your API

  private apiUrl = `${this.baseUrl}/all`;

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
}
