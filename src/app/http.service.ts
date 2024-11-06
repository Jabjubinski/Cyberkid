import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http: HttpClient) { }

  getAllProducts() {
    return this.http.get('https://api.everrest.educata.dev/shop/products/all?page_index=1&page_size=49');
  }

}
