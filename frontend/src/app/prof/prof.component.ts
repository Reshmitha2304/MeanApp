import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { userSearch } from '../usersearch'
import { Toggle } from '../toggle'


@Component({
  selector: 'app-prof',
  templateUrl: './prof.component.html',
  styleUrls: ['./prof.component.css']
})
export class ProfComponent implements OnInit {

  uname:userSearch;
  toggle:Toggle={
    toggle:true
  };
  constructor( private dataservice : DataService) { }

  search(frm)
  {
    var uname:userSearch={
      Username:frm.value.name
    }
    // this.uname=frm.value.name;
    console.log(frm.value)
    this.dataservice.search(uname)
    .subscribe(item=>{
      console.log(item)
    })
  }
  ngOnInit() {
  }

}
