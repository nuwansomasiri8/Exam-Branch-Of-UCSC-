import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registration_no:String;
  password:String;

  constructor(
     private authService:AuthService,
     private flashMessage:FlashMessagesService,
     private router:Router

  ) { }

  ngOnInit() {
  }

	  loginUser(){

	    const user = {
        registration_no:this.registration_no,
	       password:this.password
	    };

        this.authService.loginUser(user).subscribe(res=>{

           if(res.state) {
             this.authService.storeData(res.token,res.user,res.level);
             this.flashMessage.show("You're Loggedin" , { cssClass: 'alert-success', times:3000});
             this.router.navigate(['/profile']);
          }else {
             this.flashMessage.show(res.msg , { cssClass: 'alert-danger', times:3000});
             this.router.navigate(['/login']);
          }

        })
  }

}
