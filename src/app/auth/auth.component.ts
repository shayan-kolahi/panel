import { Component, OnInit } from '@angular/core';
import {ToastService} from "angular-toastify";
import {Router} from "@angular/router";


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  constructor(private _toastService: ToastService, private router: Router) {}
  ngOnInit(): void {}

  logIn = {
    email : "" ,
    pass : "" ,
  }
  isEmail(email: string):boolean {
    let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|("ِ.+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
    return pattern.test(email)
  }
  logInClick(){
    if (this.logIn.email == "" || this.logIn.pass == ""){
      this._toastService.error('ممکنه یکی از فیلد ها خالی باشه');
    }else if (!this.isEmail(this.logIn.email)) {
      this._toastService.error('ایمیل');
    }else if (this.logIn.pass.length < 7){
      this._toastService.error('رمز باید بیشتر از 8 کاراکتر باشد');
    } else {
      this._toastService.success('ورود شما با موفقیت انجام شد');
      this.router.navigate(['/', 'Panel']);
    }
  }





  register = {
    name : "" ,
    email : "" ,
    pass : "" ,
    passR : "" ,
  }

  registerClick(){
    if (this.register.name == "" || this.register.email == "" || this.register.pass == ""){
      this._toastService.error('ممکنه یکی از فیلد ها خالی باشه');
    }else if (!this.isEmail(this.register.email)) {
      this._toastService.error('ایمیل');
    }else if (this.register.pass.length < 7){
      this._toastService.error('رمز باید بیشتر از 8 کاراکتر باشد');
    }else if (this.register.passR !== this.register.pass ){
      this._toastService.error('تکرار رمز اشتباه است');
    } else {
      this._toastService.success('ثبت نام شما با موفقیت انجام شد');
      this.router.navigate(['/', 'Panel']);
    }
  }






















}
