import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';


@Component({
  selector: 'app-repeat-form-for-cs2',
  templateUrl: './repeat-form-for-cs2.component.html',
  styleUrls: ['./repeat-form-for-cs2.component.css']
})
export class RepeatFormForCs2Component implements OnInit {

  user:any;

  uIndex_no:String;
  ENH_1102:String;  SCS_2106:String;  
  SCS_1107:String;  SCS_2107:String;  
  SCS_1108:String;  SCS_2108:String;  
  SCS_1109:String;  SCS_2109:String;  
  SCS_1110:String;  SCS_2110:String;  
  SCS_1111:String;  SCS_2111:String;  
  SCS_1112:String;  SCS_2112:String;
  SCS_1113:String;  receipt_no:String;

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

  
  cs2Data(){
    const cs2 = {
      uIndex_no:this.uIndex_no=this.user.registration_no,
      ENH_1102:this.ENH_1102, SCS_2106:this.SCS_2106,
      SCS_1107:this.SCS_1107, SCS_2107:this.SCS_2107, 
      SCS_1108:this.SCS_1108, SCS_2108:this.SCS_2108, 
      SCS_1109:this.SCS_1109, SCS_2109:this.SCS_2109, 
      SCS_1110:this.SCS_1110, SCS_2110:this.SCS_2110, 
      SCS_1111:this.SCS_1111, SCS_2111:this.SCS_2111,
      SCS_1112:this.SCS_1112, SCS_2112:this.SCS_2112,                              
      SCS_1113:this.SCS_1113, receipt_no:this.receipt_no                        
      
    };
    
    this.authService.cs2Data(cs2).subscribe(res=>{
      if(res.state) {
           this.flashMessage.show("You're Repeat Form Successfully" , { cssClass: 'alert-success', times:3000});
           this.router.navigate(['/profile']);
      }else {
           this.flashMessage.show("Something Went Wrong" , { cssClass: 'alert-success', times:3000});
           this.router.navigate(['/repeatFormCs2']);
           console.log(cs2);
           
      }
   });

  }

}
