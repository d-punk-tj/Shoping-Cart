import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartserviceService } from 'src/app/services/cartservice.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private cs: CartserviceService){}

  products = this.cs.productList;


  addProductToCart(product : any) {
    this.cs.addProductToCart(product);
  }

  deleteProductFromCart(product : any){
    this.cs.removeProduct(product);
  }

  

 


  
  ngOnInit(){

  }

}
