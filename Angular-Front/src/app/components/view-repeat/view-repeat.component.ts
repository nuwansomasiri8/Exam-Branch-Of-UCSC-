import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-view-repeat',
  templateUrl: './view-repeat.component.html',
  styleUrls: ['./view-repeat.component.css']
})
export class ViewRepeatComponent implements OnInit {
  
  user:any;
  csData1s:any;
  id:String;
  $id='2015cs105';

  constructor(
    private authService:AuthService
  ) { }

  ngOnInit() {

    this.authService.getProfile().subscribe(res=>{

        this.user = res.user;
        //this.cs1Data = res.cs1Data;
    });

    this.authService.getCsData1(this.$id).subscribe(res=>{
      console.log(this.$id);
      
        this.csData1s = res.csData1;
        console.log(this.csData1s);
    });
  }

}
