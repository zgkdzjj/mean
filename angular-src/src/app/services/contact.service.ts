import { Injectable } from '@angular/core';
import {hostUrl} from "../config/HostUrl";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import { ResponseContentType } from '@angular/http';

@Injectable()
export class ContactService {
  hostUrl = hostUrl;

  constructor(private http: Http) { }

  // Add a contact
  addContact(contact) {
    return this.http.post(this.hostUrl + 'contacts', contact)
      .map(res => res.json());
  }

  // Get all contacts from the db
  getContacts() {
    return this.http.get(this.hostUrl + 'contacts', null)
      .map(res => res.json());
  }

  // Update a contact
  updateContact(contact) {
    console.log('update contact => ' + JSON.stringify(contact, null, 4));
    let id = contact.getAll('_id');
    console.log('update id => ' + id);
    return this.http.put(this.hostUrl + 'contacts/' + id, contact)
      .map(res => res.json());
  }

  // Delete a contact
  deleteContact(contact) {
    let id = contact._id;
    return this.http.delete(this.hostUrl + 'contacts/' + id)
      .map(res => res.json());
  }

  // Get an image
  getImg(id){
    return this.http.get(this.hostUrl + 'contacts/image/' + id, { responseType: ResponseContentType.Blob })
      .map(res => res.blob());
  }
}
