import { Component, OnInit } from '@angular/core';
import { LoginService} from '../login.service';
import { AuthService } from '../../guards/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  candidates: {};
  login_user = {
    name:'',
    password:''
  }
  loginerror: boolean = false;
  showloader: boolean = false;
  constructor(private loginService: LoginService, private authService: AuthService, private route: Router ) {
    this.authService.showmenu= false;
  }

  ngOnInit() {  
  }
  onSubmit(form) { 
    //this.submitted = true; 
    this.loginerror = false;
    this.showloader = true;
    this.login_user = form.value;
    console.log("Login",this.login_user)
    let loginuser = {
      "email":"adminuser@yopmail.com",
      "password":"adminuser"
    }
    this.route.navigate(["/travellers_list"]);
    // this.loginService.postLogin(this.login_user).subscribe(response=>{
    //   this.showloader = false;
    //   if(response.status){
    //     this.authService.sendToken(response.content.token);
    //   }
    // },
    // error=>{
    //   this.showloader = false;
    //   this.loginerror = true;
    // });
  }
}
