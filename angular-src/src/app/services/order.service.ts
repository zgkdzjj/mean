import { Injectable } from '@angular/core';
import {IOrder} from "../models/Order";
import {Http, Headers} from "@angular/http";

@Injectable()
export class OrderService {
  order: IOrder;

  constructor(private http: Http) { }

  // Add orders
  addOrder(order) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('orders', order, {headers: headers})
      .map(res => res.json());
  }

  // Get all orders from the db
  getOrders() {
    return this.http.get('orders', null)
      .map(res => res.json());
  }

  // Update Order
  updateOrder(order) {
    let headers = new Headers();
    let id = order._id;
    headers.append('Content-Type', 'application/json');
    return this.http.put('orders/' + id, JSON.stringify(order), {headers: headers})
      .map(res => res.json());
  }

  // Delete an order
  deleteOrder(order) {
    let id = order._id;
    return this.http.delete('orders/' + id)
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
