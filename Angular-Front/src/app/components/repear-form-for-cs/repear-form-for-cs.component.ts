import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';


@Component({
  selector: 'app-repear-form-for-cs',
  templateUrl: './repear-form-for-cs.component.html',
  styleUrls: ['./repear-form-for-cs.component.css']
})
export class RepearFormForCsComponent implements OnInit {

  user:any;

  uIndex_no:String;
  ENH_1101:String;  ENH_2101:String;  SCS_3101:String;
  SCS_1101:String;  SCS_2101:String;  SCS_3102:String;
  SCS_1102:String;  SCS_2103:String;  SCS_3103:String;
  SCS_1103:String;  SCS_2104:String;  SCS_3105:String;
  SCS_1104:String;  SCS_2105:String;  SCS_3106:String;
  SCS_1105:String;                    SCS_3107:String;
  SCS_1106:String;                    SCS_3108:String;
                                      SCS_3109:String;
                                      SCS_3110:String;
                                      SCS_3111:String;
                                      SCS_3112:String;
                                      SCS_3113:String;
                                      SCS_3114:String;
                                      SCS_3115:String;
                                      SCS_3116:String;
                                      SCS_3118:String;
                                      SCS_3119:String;
                                      SCS_3120:String;
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

  cs1Data(){
    
    const cs1 = {
      uIndex_no:this.uIndex_no=this.user.registration_no,
      ENH_1101:this.ENH_1101, ENH_2101:this.ENH_2101, SCS_3101:this.SCS_3101,
      SCS_1101:this.SCS_1101, SCS_2101:this.SCS_2101, SCS_3102:this.SCS_3102,
      SCS_1102:this.SCS_1102, SCS_2103:this.SCS_2103, SCS_3103:this.SCS_3103,
      SCS_1103:this.SCS_1103, SCS_2104:this.SCS_2104, SCS_3105:this.SCS_3105,
      SCS_1104:this.SCS_1104, SCS_2105:this.SCS_2105, SCS_3106:this.SCS_3106,
      SCS_1105:this.SCS_1105,                         SCS_3107:this.SCS_3107,      
      SCS_1106:this.SCS_1106,                         SCS_3108:this.SCS_3108,
                                                      SCS_3109:this.SCS_3109,
                                                      SCS_3110:this.SCS_3110,
                                                      SCS_3111:this.SCS_3111,
                                                      SCS_3112:this.SCS_3112,
                                                      SCS_3113:this.SCS_3113,
                                                      SCS_3114:this.SCS_3114,
                                                      SCS_3115:this.SCS_3115,
                                                      SCS_3116:this.SCS_3116,
                                                      SCS_3118:this.SCS_3118,
                                                      SCS_3119:this.SCS_3119,
                                                      SCS_3120:this.SCS_3120,
                                                      receipt_no:this.receipt_no
      
    };

    this.authService.cs1Data(cs1).subscribe(res=>{
      if(res.state) {
           this.flashMessage.show("You're Repeat Form Successfully" , { cssClass: 'alert-success', times:3000});
           this.router.navigate(['/profile']);
      }else {
           this.flashMessage.show("Something Went Wrong" , { cssClass: 'alert-success', times:3000});
           this.router.navigate(['/repeatFormCs']);
           console.log(cs1);
           
      }
   });

  }

}
