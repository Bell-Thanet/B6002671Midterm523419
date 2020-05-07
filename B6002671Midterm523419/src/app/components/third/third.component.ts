import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  constructor(private p:ProductService,private cartService:CartService) {
    
   }

  ngOnInit(): void {
  }
  getAllProduct(){
    return this.p.getAllProduct();
  }

  addToCart(p_id: number) {
    this.cartService.add(p_id);
  }
}
