import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/Product';
import { ProductionService } from '../production.service';


@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.css'],
})
export class ProductionComponent implements OnInit {
  products: Product[] = [];

  constructor(private productionService: ProductionService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productionService.getAllProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
}
