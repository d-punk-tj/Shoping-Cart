import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartserviceService } from 'src/app/services/cartservice.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  constructor(public cs: CartserviceService) { }

  
  products = this.cs.cartProductList;
  

  

  removeProduct(product : any) {
    
  }

  

  ngOnInit(): void {
  }

}
