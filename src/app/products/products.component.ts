import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  products : Array<any> = [

    {id: '1', name: 'John Smith ', price : 50 , checked : true },
    {id: '2', name: ' gt ', price : 154 , checked : true },
    { id: '3', name: 'tv', price :2500  , checked : false },
  ];

  handlecheckProduct(pro:any){pro.checked = ! pro.checked}

  ngOnInit(): void {
  }

}
