import { Component } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent { 
  
  productsData!: any;

  constructor(public service: HttpService){
    this.service.getAllProducts().subscribe((data: any) => {
      this.productsData = data.products;
    })
  }
}
