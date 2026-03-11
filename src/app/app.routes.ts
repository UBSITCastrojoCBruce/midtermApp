import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Navi } from './components/navi/navi';
import { Attribute } from './databinding/attribute/attribute';
import { Class } from './databinding/class/class';
import { EventBinding } from './databinding/event/event';
import { Interpolation } from './databinding/interpolation/interpolation';
import { PropertyBinding } from './databinding/property/property';
import { Style } from './databinding/style/style';
import { TwoWayBinding } from './databinding/two-way/two-way';
import { Products } from './products/products';
import { ProductList } from './product-list/product-list';
import { ProductDetails } from './product-details/product-details';

export const routes: Routes = [{path: 'home', component: Home},{path: 'navi', component: Navi},{path: 'attribute', component: Attribute},{path: 'class', component: Class},
{path: 'event', component: EventBinding},{path: 'interpolation', component: Interpolation},{path: 'property', component: PropertyBinding},{path: 'style', component: Style},
{path: 'two-way', component: TwoWayBinding},{path: 'products', component: Products}, {path: 'productList', component: ProductList, children: [{path: ':id', children: [{ path: 'details', component: ProductDetails}]}]}];
