import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import {IBrand} from "../models/Brand";
import {hostUrl} from '../config/HostUrl';


@Injectable()
export class BrandService {
  hostUrl = hostUrl;
  brand: IBrand;

  constructor(private http: Http) { }

  // Add Brand
  addBrand(brand) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.hostUrl + 'brands',
      brand, {headers: headers})
      .map(res => res.json());
  }

  // Get all brand from the database
  getBrand() {
    return this.http.get(this.hostUrl + 'brands', null)
      .map(res => res.json());
  }

  // Edit a brand
  updateBrand(brand) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.hostUrl + 'brands/' + brand._id, JSON.stringify(brand), {headers: headers})
      .map(res => res.json());
  }

  // Delete a brand
  deleteBrand(brand) {
    return this.http.delete(this.hostUrl + 'brands/' + brand._id)
      .map(res => res.json());

  }



}
