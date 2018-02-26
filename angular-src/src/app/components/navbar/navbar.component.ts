import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menuActive: string;
  activeMenuId: string;
  showSideBar2: boolean;
  menu_products = {
    "title" : "Products",
    "sub_menu" : [

    ]
  };


  constructor(private authService: AuthService,
              private flashMessages: FlashMessagesService,
              private router: Router) {

  }

  ngOnInit() {

  }

  onLogoutClick(){
    this.authService.logout();
    this.flashMessages.show('You are logged out', {
      cssClass: 'alert-success', timeout: 3000
    });
    this.router.navigate(['home']);

  }

  goSideMenu2(event){

    let id = event.id;
    this.activeMenuId = id;
    console.log('id = ' + id);
    if(id == 'home_menutitle') {
      this.showSideBar2 = false;
    } else {
      this.showSideBar2 = true;
    }

    console.log('showSideBar2 = ' + this.showSideBar2);
  }

}
