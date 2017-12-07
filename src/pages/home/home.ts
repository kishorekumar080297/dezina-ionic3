import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { NavController } from 'ionic-angular';
import { ProductProvider } from "../../providers/product/product";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public allProducts = [];

  constructor(private productProvider: ProductProvider, public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    this.productProvider.getProducts()
      .subscribe((response) => {
          this.allProducts=response;
      });
      
  }
}
