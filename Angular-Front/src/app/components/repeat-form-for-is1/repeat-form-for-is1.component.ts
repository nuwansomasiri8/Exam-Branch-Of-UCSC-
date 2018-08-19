import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-repeat-form-for-is1',
  templateUrl: './repeat-form-for-is1.component.html',
  styleUrls: ['./repeat-form-for-is1.component.css']
})
export class RepeatFormForIs1Component implements OnInit {

  user:any;
  uIndex_no:String;
  ENH_1001:String;  ENH_2001:String;  IS_3001:String;
  IS_1001:String;  IS_2003:String;  IS_3002:String;
  IS_1002:String;  IS_2004:String;  IS_3003:String;
  IS_1003:String;  IS_2005:String;  IS_3004:String;
  IS_1004:String;  IS_2006:String;  IS_3005:String;
  IS_1005:String;                   IS_3006:String;
  IS_1006:String;                   IS_3007:String;
  IS_1007:String;                   IS_3008:String;
                                    IS_3009:String;
                                    IS_3010:String;
                                    IS_3011:String;
                                    IS_3012:String;
                                    IS_3013:String;
                                    IS_3014:String;
                                    IS_3015:String;
                                    IS_3016:String;
                                    IS_3017:String;
                                    IS_3018:String;
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

  is1Data(){
    
    const is1 = {
      uIndex_no:this.uIndex_no=this.user.registration_no,
      ENH_1001:this.ENH_1001, ENH_2001:this.ENH_2001, IS_3001:this.IS_3001,
      IS_1001:this.IS_1001, IS_2003:this.IS_2003,     IS_3002:this.IS_3002,
      IS_1002:this.IS_1002, IS_2004:this.IS_2004,     IS_3003:this.IS_3003,
      IS_1003:this.IS_1003, IS_2005:this.IS_2005,     IS_3004:this.IS_3004,
      IS_1004:this.IS_1004, IS_2006:this.IS_2006,     IS_3005:this.IS_3005,
      IS_1005:this.IS_1005,                           IS_3006:this.IS_3006,      
      IS_1006:this.IS_1006,                           IS_3007:this.IS_3007,
      IS_1007:this.IS_1007,                           IS_3008:this.IS_3008,
                                                      IS_3009:this.IS_3009,
                                                      IS_3010:this.IS_3010,
                                                      IS_3011:this.IS_3011,
                                                      IS_3012:this.IS_3012,
                                                      IS_3013:this.IS_3013,
                                                      IS_3014:this.IS_3014,
                                                      IS_3015:this.IS_3015,
                                                      IS_3016:this.IS_3016,
                                                      IS_3017:this.IS_3017,
                                                      IS_3018:this.IS_3018,
                                                      receipt_no:this.receipt_no
      
    };

    this.authService.is1Data(is1).subscribe(res=>{
      if(res.state) {
           this.flashMessage.show("You're Repeat Form Successfully" , { cssClass: 'alert-success', times:3000});
           this.router.navigate(['/profile']);
           console.log(is1);
      }else {
           this.flashMessage.show("Something Went Wrong" , { cssClass: 'alert-success', times:3000});
           this.router.navigate(['/repeatFormCs']);
           console.log(is1);
           
      }
   });

  }

}
