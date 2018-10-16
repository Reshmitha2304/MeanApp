import { Component, OnInit } from '@angular/core';
import { UserAuth } from "../userauth";
import { DataService } from '../data.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private dataservice : DataService, private router : Router ) { }

  login(frm){
  var userauth: UserAuth={
    userName:frm.value.uname,
    userPwd:frm.value.pwd
  }
  this.dataservice.login(userauth).subscribe(item=>{
    if(item.success)
    {
      this.router.navigateByUrl('/profile')
    }
    else
      console.log(item.msg);
  })
  }
  ngOnInit() {
  }

}
