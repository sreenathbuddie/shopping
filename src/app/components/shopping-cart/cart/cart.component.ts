import { Component, OnInit } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';
import { MessengerService } from 'src/app/services/messenger.service';
import { Product } from 'src/app/models/product';
import { DataService } from 'src/app/models/DataService';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [];

  cartTotal = 0;

  constructor(private msg: MessengerService,private datasearch: DataService) { }

  ngOnInit() {

    this.msg.getMsg().subscribe((product: Product ) => {
     this.addProductToCart(product);
  })
  }

  addProductToCart(product: Product){

    let productExists = false;

    for(let i in this.cartItems){
      if(this.cartItems[i].productId === product.id){
        this.cartItems[i].quantity++;
        productExists = true;
        break;
      }
    }

    if(!productExists){
      this.cartItems.push({
        productId: product.id,
        productName: product.title,
        quantity: 1,
        price: product.price.final_price
      })
    }
  
    this.cartTotal =0;
    this.cartItems.forEach(item => {
      this.cartTotal += (item.quantity * item.price);
      this.datasearch.changeCartCount(item.quantity);
    })
  }

}
