import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-log-under-graduate',
  templateUrl: './log-under-graduate.component.html',
  styleUrls: ['./log-under-graduate.component.css']
})
export class LogUnderGraduateComponent implements OnInit {

  constructor(
    private router:Router,
    private authService:AuthService,
    private flashMessage:FlashMessagesService
  ) { }

  ngOnInit() {
  }

}
