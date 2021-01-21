import { Component, ViewEncapsulation } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CartserviceService } from '../services/cartservice.service';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidenavComponent {

  constructor(private breakpointObserver: BreakpointObserver, private cs: CartserviceService) {}

  productList = this.cs.productList;


  cartProductList = this.cs.cartProductList;
  

  addProductToCart(product : any) {
    this.addProductToCart(product);
  }


  removeProduct(product : any) {
    this.cs.removeProduct(product);
   }
   

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  

}
