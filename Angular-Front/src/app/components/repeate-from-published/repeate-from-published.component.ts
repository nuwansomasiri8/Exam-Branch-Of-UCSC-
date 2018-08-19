import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-repeate-from-published',
  templateUrl: './repeate-from-published.component.html',
  styleUrls: ['./repeate-from-published.component.css']
})
export class RepeateFromPublishedComponent implements OnInit {

  sem:String;
  date:String;
  user:any;
  publiData:any;
  public today: Date; 

  constructor(

    private authService:AuthService,
    private flashMessage:FlashMessagesService,
    private router:Router
  ) { }

  ngOnInit() {
    this.authService.getPublishedData().subscribe(res=>{

      this.publiData = res.pe;
      console.log(res.pe);
      
  });
  }

  savePublishedData(){
    const examPublished = {
      semester:this.sem,
      lastDate:this.date
    };

    console.log(examPublished);
    

    this.authService.savePublishedData(examPublished).subscribe(res=>{
      if(res.state) {
           this.flashMessage.show("You're Form Published Successfully" , { cssClass: 'alert-success', times:3000});
           this.router.navigate(['/profile']);
      }else {
           this.flashMessage.show("Something Went Wrong" , { cssClass: 'alert-success', times:3000});
           console.log(examPublished);
           
      }
   });

  }
  

  

}
