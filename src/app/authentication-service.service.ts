import { Injectable } from '@angular/core';
// import {Injectable} from 'angular2/core';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
export class User {
  constructor(
    public email: string,
    public password: string) { }
}




@Injectable()
export class AuthenticationService {

  constructor(
    private _router: Router, private http: Http) { }

  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['']);
  }

  login(user) {

    let self = this;
    this.login_api(user).subscribe(
      function (response) {
        console.log("Success Response", response.status);
        if (response.status == 1) {
          localStorage.setItem("user", user);
          self._router.navigate(['report']);
          return true;
        } else {
          return false;
        }
      },
      function (error) { console.log("Error happened" + error) }

    );
  }
  login_api(user) {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    // let body = JSON.stringify(user);
    // console.log(body);
    return this.http.post('http://localhost:6001/reports/login', user, headers).
      map((res: Response) => res.json())
      .catch((e) => {
        return Observable.throw(
          new Error(`${e.status} ${e.statusText}`)
        );
      });

    //  this.http.get('friends.json')
    //                 .map(response => response.json())
    //                 .subscribe(result => this.result =result);


  }
  checkCredentials() {
    if (localStorage.getItem("user") === null) {
      this._router.navigate(['report']);
    }
  }
}
