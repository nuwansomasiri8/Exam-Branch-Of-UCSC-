import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-repeat-form-for-is2',
  templateUrl: './repeat-form-for-is2.component.html',
  styleUrls: ['./repeat-form-for-is2.component.css']
})
export class RepeatFormForIs2Component implements OnInit {

  user:any;
  uIndex_no:String;
  IS_1008:String;  IS_2007:String;  
  IS_1009:String;  IS_2008:String;  
  IS_1010:String;  IS_2009:String;  
  IS_1011:String;  IS_2010:String;  
  IS_1012:String;  IS_2011:String;  
  IS_1013:String;  IS_2012:String;  
  IS_1014:String;
  receipt_no:String;

  constructor(
    private authService:AuthService,
    private flashMessage:FlashMessagesService,
    private router:Router
  ) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(res=>{

        this.user = res.user;
        //this.cs1Data = res.cs1Data;
    });
  }

  is2Data(){
    
    const is2 = {
      uIndex_no:this.uIndex_no=this.user.registration_no,
      IS_1008:this.IS_1008, IS_2007:this.IS_2007, 
      IS_1009:this.IS_1009, IS_2008:this.IS_2008,     
      IS_1010:this.IS_1010, IS_2009:this.IS_2009,     
      IS_1011:this.IS_1011, IS_2010:this.IS_2010,     
      IS_1012:this.IS_1012, IS_2011:this.IS_2011,     
      IS_1013:this.IS_1013, IS_2012:this.IS_2012,            
      IS_1014:this.IS_1014,                            
      receipt_no:this.receipt_no
      
    };

    this.authService.is2Data(is2).subscribe(res=>{
      if(res.state) {
           this.flashMessage.show("You're Repeat Form Successfully" , { cssClass: 'alert-success', times:3000});
           this.router.navigate(['/profile']);
           console.log(is2);
      }else {
           this.flashMessage.show("Something Went Wrong" , { cssClass: 'alert-success', times:3000});
           this.router.navigate(['/repeatFormCs']);
           console.log(is2);
           
      }
   });

  }

}
