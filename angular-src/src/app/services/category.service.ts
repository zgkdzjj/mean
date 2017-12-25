import { Injectable } from '@angular/core';
import { Http, Headers} from "@angular/http";
import { ICategory} from "../models/Category";
import {hostUrl} from '../config/HostUrl';
@Injectable()
export class CategoryService {
  hostUrl = hostUrl;
  cat: ICategory;

  constructor(private http: Http) { }

  //  Add Category
  addCat(cat) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.hostUrl + 'categories', cat, {headers: headers})
      .map(res => res.json());
  }

  // Get all categories from the database
  getCat() {
    return this.http.get(this.hostUrl + 'categories', null)
      .map(res => res.json());
  }

  // Update a category
  updateCat(cat) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.hostUrl + 'categories/' + cat._id, JSON.stringify(cat), {headers: headers})
      .map(res => res.json());

  }

  // Delete a category
  deleteCat(cat) {
    return this.http.delete(this.hostUrl + 'categories/' + cat._id)
      .map(res => res.json());
  }


}
