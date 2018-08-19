import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user_name:String;
  index_no:String;
  registration_no:String;
  email:String;
  password:String;
  mobile_no:String;
  fixed_no:String;
  full_name:String;
  category:String;

  constructor(
      private authService:AuthService,
      private flashMessage:FlashMessagesService,
      private router:Router

  ) { }

  ngOnInit() {
  }

  registerData(){
    
    const user = {
       user_name:this.user_name,
       index_no:this.index_no,
       registration_no:this.registration_no,
       email:this.email,
       password:this.password,
       mobile_no:this.mobile_no,
       fixed_no:this.fixed_no,
       full_name:this.full_name,
       category:this.category

    };

    this.authService.registerUser(user).subscribe(res=>{
       if(res.state) {
            this.flashMessage.show("You're Registered Successfully" , { cssClass: 'alert-success', times:3000});
            this.router.navigate(['/login']);
       }else {
            this.flashMessage.show("Something Went Wrong" , { cssClass: 'alert-success', times:3000});
            this.router.navigate(['/register']);
       }
    });

    
  }

}
