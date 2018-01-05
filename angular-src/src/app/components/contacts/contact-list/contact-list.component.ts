import { Component, OnInit } from '@angular/core';
import {Contact} from "../../../models/Contact";
import {ContactService} from "../../../services/contact.service";
import {error} from "util";
import {ConfirmationService, OverlayPanel, Message} from "primeng/primeng";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[];
  selectedContact: Contact;
  visibleSidebar: boolean;
  imageToShow: any;
  newContact: boolean;
  msgs: Message[] = [];
  constructor(private contactService: ContactService,
              private confirmationService: ConfirmationService) { }

  ngOnInit() {
    /*this.contactService.getContacts().subscribe(contacts => {
      console.log('contacts => ' + JSON.stringify(contacts, null, 4));
      this.contacts = contacts.data;
    });*/
    this.loadContacts();
  }

  loadContacts() {
    this.contactService.getContacts().subscribe(contacts => {
      console.log('contacts => ' + JSON.stringify(contacts, null, 4));
      this.contacts = contacts.data;
    });
  }

  // Handle contact created
  handleContactCreated(event) {
    console.log('contact created event => ' + JSON.stringify(event, null, 4));

    this.visibleSidebar = false;
    if(event.success) {
      let contacts = [...this.contacts];
      let contact = event.data;
      contacts.push(contact);
      this.contacts = contacts;
      this.msgs = [{severity:'success', summary:'Success Message', detail:'Contact Created'}];
    } else {
      this.msgs = [{severity:'error', summary:'Error Message', detail:'Failed to create contact'}];
    }
  }

  handleCotnactUpdated(event) {
    console.log('contact created event => ' + JSON.stringify(event, null, 4));
    this.visibleSidebar = false;
    if(event.success) {
      this.msgs = [{severity:'success', summary:'Success Message', detail:'Contact Updated'}];
      this.loadContacts();
    } else {
      this.msgs = [{severity:'error', summary:'Error Message', detail:'Failed to update contact'}];
    }
  }

  handleCancal() {
    this.visibleSidebar = false;
  }

  onRowSelect(event) {
    //this.selectedContact = event.data;
  }

  /*addContact = (contact: Contact) => {
    this.contacts.push(contact);
    console.log('contacts => ' + this.contacts);
    return this.contacts;
  }*/

  createNewContact() {
    let newContact = new Contact();
    this.selectedContact = newContact;
    this.visibleSidebar = true;
  }





  // Handle Image
  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.imageToShow = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }

  showImg(event, imgId, overlaypanel: OverlayPanel) {
    console.log('row => ' + JSON.stringify(imgId, null, 4));

    this.contactService.getImg(imgId).subscribe(
      data => {
        this.createImageFromBlob(data);
      },
      error => {
        console.log(error);
      }
    );


    overlaypanel.toggle(event);
  }

  // Click Methods
  onEditClick(event) {
    console.log('event => ' + JSON.stringify(event, null, 4))
    this.selectedContact = event;
    this.visibleSidebar = true;
  }

  // On Delete Click
  onDeleteClick(event, index) {
    console.log('delete button pressed');
    console.log('index => ' + index);
    let contact = event;
    this.confirmationService.confirm({
      message: 'Do you want to delete this contact?',
      header: 'Delete Confirmation',
      icon: 'fa fa-trash',
      accept: () => {
        this.contactService.deleteContact(contact).subscribe(
          data => {
            if (data.success) {
              this.msgs = [{severity:'info', summary:'Confirmed', detail:'Contact deleted'}];
              this.loadContacts();

            } else {
              this.msgs = [{severity:'error', summary:'Error Message', detail:'Failed to delete contact'}];
            }
          },
          error => {
            this.msgs = [{severity:'error', summary:'Error Message', detail:'Failed to delete contact'}];
            console.log('Error occur while deleting contact.');
          }
        );

      },
      reject: () => {
        //this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
      }
    })

  }




}
