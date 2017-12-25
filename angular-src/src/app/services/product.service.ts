import { Injectable } from '@angular/core';
import {IProduct} from "../models/Product";
import {Http, Headers} from "@angular/http";

@Injectable()
export class ProductService {
  hostUrl = 'http://localhost:3000/';
  prod: IProduct;

  constructor(private http: Http) { }

  // Add Product
  addProd(prod) {
    let headers = new Headers();
    //console.log('JSON.stringify(prod) => ' + JSON.stringify(prod));

    //headers.append('Content-Type', 'multipart/form-data');
    return this.http.post(this.hostUrl + 'products', prod, {headers: headers})
      .map(res => res.json());
  }

  // Get all products from the db
  getProd() {
    return this.http.get(this.hostUrl + 'products', null)
      .map(res => res.json());
  }

  // Update a product
  updateProd(prod) {
    let headers = new Headers();
    //headers.append('Content-Type', 'multipart/related');
    //headers.append('Content-Type', 'image/*');

    console.log('prod._id => ' + prod.getAll('_id'));
    console.log('JSON.stringify(prod) => ' + JSON.stringify(prod, null, 4));
    let id = prod.getAll('_id');
    return this.http.put(this.hostUrl + 'products/' + id, prod, {headers: headers})
      .map(res => res.json());
  }

  // Delete a product
  deleteProd(prod) {
    return this.http.delete(this.hostUrl + 'products/' + prod._id)
      .map(res => res.json());
  }

  // Get a product's image
  getImage(imgName) {
    return this.http.get(this.hostUrl + 'products/images/' + imgName)
      .map(res => res.json());
  }

  // Get a product by its name
  getProdByName() {

  }


}
