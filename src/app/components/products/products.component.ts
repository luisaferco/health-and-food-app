import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/product.model';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list'; 
import { error } from 'console';


@Component({
  standalone: true,
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  imports: [MatGridListModule, MatListModule, MatExpansionModule, CommonModule, MatCardModule]
})
export class ProductsComponent implements OnInit {

  panelOpenState: boolean = false;
  products!: Product[];

  constructor(private http:HttpClient){

  }

  ngOnInit(): void {
    this.getProducts().subscribe((data) => {
        this.products = data;
      }
    )
  }

  getProducts(): Observable<any> {
    return this.http.get<any>('https://api.escuelajs.co/api/v1/products')
  }



}
