import { Component } from '@angular/core';
import { FormControl , FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.scss']
})
export class JoinUsComponent  {
  constructor(private _AuthService:AuthService, private _Router:Router){}
  isLoading:boolean = false;
  msgError!:string

  registerForm: FormGroup = new FormGroup({
    first_name: new FormControl(null, [ Validators.required, Validators.minLength(2),Validators.maxLength(25), ]),
    last_name: new FormControl(null, [ Validators.required,  Validators.minLength(2),  Validators.maxLength(25),]),
    age: new FormControl(null, [Validators.required, Validators.min(10), Validators.max(80), ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [ Validators.required,  Validators.minLength(2), Validators.maxLength(10), Validators.pattern(/^[A-Z][\w]{1,10}$/),]),
  });


  submitRegisterForm(registerForm:FormGroup){
    // console.log(registerForm.value);
    this.isLoading = true;
    if(registerForm.valid){
      this._AuthService.registerForm(registerForm.value).subscribe((response)=>{
        if(response.message == 'success')
        {
          this._Router.navigate(['auth/logIn']);
        }
        else{
          this.msgError = response.errors.email.message;
        }
      });
    }
  }

  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

}
