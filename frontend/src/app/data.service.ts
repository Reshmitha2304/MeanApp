import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http'
import "rxjs/add/operator/map"

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : Http) { }

  addData(newuser){
    let header = new Headers();
    header.append('content-type','application/json')
    return this.http.post('http://localhost:3004/insert',newuser, { headers:header } )
    .map(res=>res.json())
  }

  login(user){
    console.log(user)
    let header = new Headers();
    header.append('content-type','application/json')
    return this.http.post('http://localhost:3004/login',user,{ headers: header })
    .map(res=>res.json())
  }

  search(name){
    console.log(name)
    let header = new Headers();
    header.append('content-type','application/json')
    return this.http.get('http://localhost:3004/retrive',name)
    .map(res=>res.json())
  }
}
