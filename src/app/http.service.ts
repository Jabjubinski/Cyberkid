import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public service: HttpClient) { }

  getAllProducts() {
    return ('https://api.everrest.educata.dev/shop/products/all?page_index=1&page_size=49')
  }

  getFilteredProducts(){

  }

  getProductById(){
    
  }
}
