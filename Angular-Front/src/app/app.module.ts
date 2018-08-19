import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';


import { AuthService } from './services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { UnderGraduateComponent } from './components/under-graduate/under-graduate.component';
import { PostGraduateComponent } from './components/post-graduate/post-graduate.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LogUnderGraduateComponent } from './components/log-under-graduate/log-under-graduate.component';
import { LogPostGraduateComponent } from './components/log-post-graduate/log-post-graduate.component';
import { UnderGraduateNavComponent } from './components/under-graduate-nav/under-graduate-nav.component';
import { RepearFormForCsComponent } from './components/repear-form-for-cs/repear-form-for-cs.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { RepeatFormForCs2Component } from './components/repeat-form-for-cs2/repeat-form-for-cs2.component';
import { RepeatFormForIs1Component } from './components/repeat-form-for-is1/repeat-form-for-is1.component';
import { RepeatFormForIs2Component } from './components/repeat-form-for-is2/repeat-form-for-is2.component';
import { ViewRepeatComponent } from './components/view-repeat/view-repeat.component';
import { RepeateFromPublishedComponent } from './components/repeate-from-published/repeate-from-published.component';
import { ViewRepeatFormsComponent } from './components/view-repeat-forms/view-repeat-forms.component';
import { PostGraduateNavComponent } from './post-graduate-nav/post-graduate-nav.component';





const applicationRoutes:Routes = [
    
    {path:'',component:HomePageComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'profile',component:ProfileComponent},
    {path:'underGraduate',component:UnderGraduateComponent},
    {path:'postGraduate',component:PostGraduateComponent},
    {path:'logUnderGraduate',component:LogUnderGraduateComponent},
    {path:'logPostGraduate',component:LogPostGraduateComponent},
    {path:'repeatFormCs',component:RepearFormForCsComponent},
    {path:'repeatFormCs2',component:RepeatFormForCs2Component},
    {path:'repeatFormIs1',component:RepeatFormForIs1Component},
    {path:'repeatFormIs2',component:RepeatFormForIs2Component},
    {path:'viewRepeat',component:ViewRepeatComponent},
    {path:'viewRepeatPublished',component:RepeateFromPublishedComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    UnderGraduateComponent,
    PostGraduateComponent,
    HomePageComponent,
    LogUnderGraduateComponent,
    LogPostGraduateComponent,
    UnderGraduateNavComponent,
    RepearFormForCsComponent,
    DropdownDirective,
    RepeatFormForCs2Component,
    RepeatFormForIs1Component,
    RepeatFormForIs2Component,
    ViewRepeatComponent,
    RepeateFromPublishedComponent,
    ViewRepeatFormsComponent,
    PostGraduateNavComponent,
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(applicationRoutes),
    FlashMessagesModule
    
  ],
  providers: [AuthService, FlashMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
