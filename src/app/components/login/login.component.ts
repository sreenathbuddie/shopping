import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/Login';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { DataService } from 'src/app/models/DataService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : string;
  password : string;

  msg : boolean = true;

  loginDetails: Login[] = [];

  constructor(private login: LoginService,private route: Router,private datasearch: DataService) { }

  ngOnInit() {
  }

  validate(){

  //this.msg =false;

  if(this.username.length != 0)
  {
    this.login.getLoginDetails(this.username).subscribe((details) => {
      if(details.length != 0)
      {
        if(details[0].password === this.password){
          this.msg = true;
          this.datasearch.changeFullName(details[0].fullName);
          this.route.navigateByUrl('/main');
        }
        else{
          this.msg = false;
        }
      }
      else{
        this.msg = false;
      }

    })
  
    }
    else{
      this.msg = false;
    }
  }
}
