import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-log-post-graduate',
  templateUrl: './log-post-graduate.component.html',
  styleUrls: ['./log-post-graduate.component.css']
})
export class LogPostGraduateComponent implements OnInit {

  constructor(
    private router:Router,
    private authService:AuthService,
    private flashMessage:FlashMessagesService
  ) { }

  ngOnInit() {
  }

}
