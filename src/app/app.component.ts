import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  actions : Array<any> = [
    {title : 'home', "route": '/home' , icon : 'house'},
    {title : 'products', "route": '/products' , icon : 'search'},
    {title : 'new product', "route": '/new-product' , icon : 'safe'},
  ];
  curentaction : any ;
  setCurentaction (action : any) {
     this.curentaction = action
  }


}
