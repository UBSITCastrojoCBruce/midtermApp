import { Injectable } from '@angular/core'; 
import { Product } from '../../models/product.interface';

@Injectable({
  providedIn: 'root',
})

export class ProductService {

  products: Product[] = [
    {id:1,name:'Laptop',category:'Electronics',price:60000,stock:10,status:'Available',description:'High performance laptop',brand:'Dell',rating:4.5,warranty:'1 Year'},
    {id:2,name:'Phone',category:'Electronics',price:30000,stock:5,status:'Limited',description:'Android smartphone',brand:'Samsung',rating:4.2,warranty:'1 Year'},
    {id:3,name:'Headphones',category:'Accessories',price:4500,stock:0,status:'Out of Stock',description:'Wireless headphones',brand:'Sony',rating:4.1,warranty:'6 Months'},
    {id:4,name:'Keyboard',category:'Accessories',price:2000,stock:20,status:'Available',description:'Mechanical keyboard',brand:'Logitech',rating:4.4,warranty:'1 Year'},
    {id:5,name:'Mouse',category:'Accessories',price:900,stock:30,status:'Available',description:'Wireless mouse',brand:'HP',rating:4.0,warranty:'1 Year'},
    {id:6,name:'Monitor',category:'Electronics',price:12500,stock:7,status:'Limited',description:'24 inch monitor',brand:'Acer',rating:4.3,warranty:'2 Years'},
    {id:7,name:'Tablet',category:'Electronics',price:15350,stock:6,status:'Available',description:'Portable tablet',brand:'Lenovo',rating:4.1,warranty:'1 Year'},
    {id:8,name:'Speaker',category:'Audio',price:3500,stock:12,status:'Available',description:'Bluetooth speaker',brand:'JBL',rating:4.6,warranty:'1 Year'},
    {id:9,name:'Camera',category:'Electronics',price:32000,stock:4,status:'Limited',description:'DSLR camera',brand:'Canon',rating:4.7,warranty:'2 Years'},
    {id:10,name:'Smartwatch',category:'Wearable',price:8100,stock:0,status:'Out of Stock',description:'Fitness smartwatch',brand:'Huawei',rating:4.2,warranty:'1 Year'}
  ];


  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id == id);
  }

  updateProduct(updated: Product): void{
    const idx = this.products.findIndex(p => p.id === updated.id);
    if (idx !== -1) this.products[idx] = {...updated};
  }

  isAuthenticated(): boolean {
    return !!sessionStorage.getItem('auth_token');
  }

  login(): void { sessionStorage.setItem('auth_token', 'demo-token');}
  logout(): void { sessionStorage.removeItem('auth_token');}
}
