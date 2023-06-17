// import { HomeComponent } from './../../Home/home/home.component';
import { Component } from '@angular/core';
import { FormControl , FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
  constructor(private _AuthService:AuthService, private _Router:Router){}
  isLoading:boolean = false;
  msgError!:string
  logInForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [ Validators.required,  Validators.minLength(2), Validators.maxLength(10), Validators.pattern(/^[A-Z][\w]{1,10}$/),]),
  });
  submitlogInForm(logInForm:FormGroup){
    // console.log(registerForm);
    this.isLoading = true;
    if(logInForm.valid){
      this._AuthService.logInForm(logInForm.value).subscribe((response)=>{
        if(response.message == 'success')
        {
          localStorage.setItem('userToken', response.token);
          this._AuthService.saveUserData();
          this._Router.navigate(['/home']);
        }
        else{
          this.msgError = response.errors.email.message;
        }
      });
    }
  }
}
