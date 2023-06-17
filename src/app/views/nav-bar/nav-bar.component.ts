import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  constructor(private _AuthService:AuthService , private _Router:Router){}
  isLogin = false;

  ngOnInit(): void {
    this._AuthService.userData.subscribe(()=>{
      if (this._AuthService.userData.getValue()!= null) {
        this.isLogin = true;
      }else{
        this.isLogin = false;
      }
    });
  }
  logOut(){
    this._AuthService.logOut();
  }
}
