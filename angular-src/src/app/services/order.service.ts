import { Injectable } from '@angular/core';
import {IOrder} from "../models/Order";
import {Http, Headers} from "@angular/http";
import {hostUrl} from "../config/HostUrl";

@Injectable()
export class OrderService {
  hostUrl = hostUrl;
  order: IOrder;

  constructor(private http: Http) { }

  // Add orders
  addOrder(order) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.hostUrl + 'orders', order, {headers: headers})
      .map(res => res.json());
  }

  // Get all orders from the db
  getOrders() {
    return this.http.get(this.hostUrl + 'orders', null)
      .map(res => res.json());
  }

  // Update Order
  updateOrder(order) {
    let headers = new Headers();
    let id = order._id;
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.hostUrl + 'orders/' + id, JSON.stringify(order), {headers: headers})
      .map(res => res.json());
  }

  // Delete an order
  deleteOrder(order) {
    let id = order._id;
    return this.http.delete(this.hostUrl + 'orders/' + id)
      .map(res => res.json());
  }

  // Get Purchase List
  getPurList() {
    return this.http.get('purchaseList.json')
      .map(res => res.json());
  }

  // Get Available Products
  getAvblProducts() {

  }
}
