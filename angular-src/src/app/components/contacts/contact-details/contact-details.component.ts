import {Component, Input, OnInit, Output,EventEmitter} from '@angular/core';
import {Contact} from "../../../models/Contact";
import {ContactService} from "../../../services/contact.service";

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  @Input()
  contact: Contact;


  @Output()
  contactCreated = new EventEmitter();
  @Output()
  contactUpdated = new EventEmitter();
  @Output()
  cancelHandler = new EventEmitter();

  newContact: boolean;



  formData: FormData = new FormData();


  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }

  onSelectFile(event, id) {
    console.log('event => ' + JSON.stringify(event, null, 4));
    console.log('id => ' + id);

    this.formData.set(id, event.files[0]);
  }

  onSubmit() {
    let contactDetails = this.contact;

    for (let key  in contactDetails) {
      this.formData.set(key, contactDetails[key]);
    }
    // If new contact then add contact else update contact
    if (!this.contact._id) {
      console.log('this.formDate Created => ' + JSON.stringify(this.formData, null, 4));
      this.contactService.addContact(this.formData).subscribe( res => {
        console.log('res=> ' + JSON.stringify(res.data, null, 4));
        //this.contactUploaded.emit(res.data);
        this.contactCreated.emit(res);
      });
    } else {
      console.log('formData._id => ' + this.formData.getAll('_id'));
      console.log('update contact');
      //this.formData.set('_id', contactDetails._id);
      this.contactService.updateContact(this.formData).subscribe(res => {
        console.log('res=> ' + JSON.stringify(res.data, null, 4));
        this.contactUpdated.emit(res);
      });
    }
  }

  onCancelClick() {
    this.cancelHandler.emit();
  }



}
