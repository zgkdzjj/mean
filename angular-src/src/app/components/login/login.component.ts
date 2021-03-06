import {Component, OnInit} from '@angular/core';
import {ValidateService} from "../../services/validate.service";
import {AuthService} from "../../services/auth.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {Router} from "@angular/router";
import { Message } from "primeng/primeng";
import { MessageService} from "primeng/components/common/messageservice";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //email: String;
  username: String;
  password: String;

  constructor(private validateService: ValidateService,
              private flashMessagesService: FlashMessagesService,
              private authService: AuthService,
              private router: Router,
              private messageService: MessageService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    const loginDetails = {
      //email: this.email,
      username: this.username,
      password: this.password
    }

    // Validate Login Form
    if (!this.validateService.validateLoginForm(loginDetails)) {
      console.log('Please fill in login details');
      return this.messageService.add({severity:'warn', summary:'Service Message', detail:'Please fill in login details'});
    }


    // Validate Login Details
    this.authService.validateLoginDetails(loginDetails).subscribe(
      data =>{
        console.log('data=> ' + JSON.stringify(data,null,4));
        if (data.success){
          this.authService.storeUserInfo(data.user,data.token);
          this.messageService.add({severity:'success', summary:'Service Message', detail:'Login successfully, redirect in 3 seconds.'});

          setTimeout(()=>{
            this.router.navigate(['/dashboard']);
            this.messageService.clear();
          }, 3000);

          console.log('Login Succeed');
        } else {
          this.messageService.add({severity:'warn', summary:'Service Message', detail: data.msg + ' Go to login page in 3s.'});

          setTimeout(() => {
            this.router.navigate(['/login']);
            this.messageService.clear();
          }, 3000);
          console.log(data.msg);
        }
      }
    );

    // Store User Info into local storage
    //storeUserInfo(){}
  }

}
