import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  productForm = new FormGroup({
    type: new FormControl(''),
    Pid: new FormControl(''),
    Pname: new FormControl(''),
    Pdetail: new FormControl(''),
    Qu: new FormControl('', [Validators.required, Validators.max(50), , Validators.min(1),]),
    Price: new FormControl('', [Validators.required, Validators.max(100000), , Validators.min(1),]),
  });
  status: string;

  productType: string[] = ['CPU', 'RAM', 'HDD', 'Mainboard'];

  constructor(private p: ProductService) { }

  get Qu() {
    return this.productForm.get('Qu');
  }
  get Price() {
    return this.productForm.get('Price')
  }

  ngOnInit(): void {
  }
  addProduct() {
    this.p.addProduct(this.productForm.value);
    console.log(this.productForm.value);
  }
  check() {
    if (this.productForm.value.Pid == '' || this.productForm.value.Pname == '' || this.productForm.value.Pdetail == '' 
    || this.productForm.value.Qu == '' || this.productForm.value.Price == '' || !this.Qu.valid || !this.Price.valid || this.productForm.value.type == '') {
      return "INVALID"
    } else {
      return "VALID"
    }
  }
}
