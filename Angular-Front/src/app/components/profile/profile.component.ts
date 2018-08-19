import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:any;
  csData1s:any;
  id:String;
  $id='2015cs105';
  //cs1Data:any;

  constructor(
      private authService:AuthService
  ) { }

  ngOnInit() {

     this.authService.getProfile().subscribe(res=>{

         this.user = res.user;
         //this.cs1Data = res.cs1Data;
         //console.log(res.user.registration_no);
         //console.log(this.user);
     });
      
  }

}
