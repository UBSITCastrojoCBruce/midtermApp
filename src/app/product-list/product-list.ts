import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, ActivatedRoute, Router } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { Product } from '../models/product.interface';
import { ProductService } from '../Services/product-service/product-service';

@Component({
  selector: 'app-product-list',
  imports: [RouterLink, RouterOutlet, FormsModule, CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList  implements OnInit{
  products: Product[] = [];
  returnUrl: string | null = null;
  selectedId: number|null = null;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  getProduct(p: Product): void {
    this.selectedId = p.id;
    this.router.navigate([ '/products', p.id, 'details']);
  }
}
