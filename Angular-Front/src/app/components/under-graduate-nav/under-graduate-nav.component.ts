import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-under-graduate-nav',
  templateUrl: './under-graduate-nav.component.html',
  styleUrls: ['./under-graduate-nav.component.css']
})
export class UnderGraduateNavComponent implements OnInit {

  constructor(
    private router:Router,
    private authService:AuthService,
    private flashMessage:FlashMessagesService

  ) { }

  ngOnInit() {
  }

}
