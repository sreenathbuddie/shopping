import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { SearchService } from 'src/app/services/search.service';
import { DataService } from 'src/app/models/DataService';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = [];

  constructor(private productservice: ProductService,private searchservice: SearchService,private dataSearch: DataService) { }

  ngOnInit() {
    
    this.productservice.getProducts().subscribe((products) => {
      this.productList = products;
    })

    this.dataSearch.currentSearch.subscribe(val => {
      this.searchservice.getSearchDetails(val).subscribe((products) => {
        this.productList = products;
      })
    })
    
  }

}