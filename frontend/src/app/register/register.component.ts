import { Component, OnInit } from '@angular/core';
import { User } from '../user' 
import { DataService } from '../data.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private dataservice : DataService ,private router : Router) { }

  register(frm){
    var newuser:User={
      userName:frm.value.name,
      userEmail:frm.value.email,
      userAdd:frm.value.add,
      userPwd:frm.value.pwd
    }
    this.dataservice.addData(newuser)
    .subscribe(item=>{
      // if(item.success)
      // {
      //   this.router.navigateByUrl('/home')
      // }
      // else
      if(item.success)
      {
        this.router.navigateByUrl('/login')
      }
      else
      console.log(item.msg);
    })
  }

  ngOnInit() {
  }

}
