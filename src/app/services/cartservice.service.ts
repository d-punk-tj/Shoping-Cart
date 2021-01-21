import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  productList = [
    {name: 'Beaux Feres', price: 7.50, pic : 'https://pngimg.com/uploads/bottle/bottle_PNG2104.png',cc:0},
    {name: 'Chateu climens', price: 3.0, pic : 'https://webstockreview.net/images/cup-clipart-plain-19.png', cc: 0},
    {name: 'Carbanet Sauvigon', price: 9.25, pic: 'https://pngimg.com/uploads/bottle/bottle_PNG2066.png', cc:0},
    {name: 'Domaine serene', price: 6.0, pic: 'https://webstockreview.net/images/white-wine-bottle-png-2.png',cc:0}
   ];


   cartProductList = [];


  constructor() { }

  addProductToCart(product : any) {
    const productExistInCart = this.cartProductList.find(({name}) => name === product.name); // find product by name
    if (!productExistInCart) {
      this.cartProductList.push({...product, num:1}); // enhance "porduct" opject with "num" property
      product.cc = 1;
      return;
    }
    productExistInCart.num += 1;
    product.cc += 1;
    
  }

  removeProduct(product : any) {
    if(product.cc == 1){
      this.cartProductList = this.cartProductList.filter(({name}) => name !== product.name)
      product.cc = 0;
      return;
    }
    else{
      let index : any = this.cartProductList.find( (prod : any) => prod.name === product.name);
      console.log(index);
      index.num -= 1;
      product.cc -= 1;     

    }
        

   }


  calcTotal() {
    return this.cartProductList.reduce((acc, prod) => acc+= prod.num ,0)
  }

  calcTotalPrice() {
    return this.cartProductList.reduce((acc, prod) => acc+= prod.num * prod.price ,0)
  }

}
