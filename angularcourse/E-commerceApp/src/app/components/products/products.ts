import { Component } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { Icategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.html',
  styleUrls: ['./products.css'],
  imports: [CommonModule , FormsModule]
})
export class Products {
filterProducts(arg0: any) {
throw new Error('Method not implemented.');
}
  product: Iproduct[] = [];
  totalorderprice :number =0
  categoris : Icategory[];
  selectedCatId : number =0;
  constructor() {

    this.product = [
      {
        id: 100,
        name: 'Example Product',
        price: 50,
        quantity: 1,
        imgurl: 'https://placehold.co/600x400',
        catId: 1
      },
      {
        id: 101,
        name: 'Another Product',
        price: 75,
        quantity: 5,
        imgurl: 'https://placehold.co/600x400',
        catId: 2
      },
      {
        id: 100,
        name: 'Example Product',
        price: 50,
        quantity: 0,
        imgurl: 'https://placehold.co/600x400',
        catId: 1
      },
      {
        id: 101,
        name: 'Another Product',
        price: 75,
        quantity: 5,
        imgurl: 'https://placehold.co/600x400',
        catId: 2
      }

    ];
    this.categoris = [
      {id:1 , name:'Electronics'},
      {id:2 , name:'Clothes'},
      {id:3 , name:'Food'},
      {id:4 , name:'Tools'},  ];
  }
  buy(count :string , price : number){
    //casting
    //this.totalorderprice =parseInt(count) * price ;
    //this.totalorderprice =Number(count) * price ;
    this.totalorderprice += +count * price ;
  }

  trackProduct( index : number , prd : Iproduct){
    return prd.id ;
}
}
