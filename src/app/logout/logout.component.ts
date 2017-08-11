import { Component, OnInit } from '@angular/core';
import {AuthenticationService, User} from '../authentication-service.service';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
  providers:[AuthenticationService]
})
export class LogoutComponent implements OnInit {

    constructor(
        private _service:AuthenticationService){}
 
    ngOnInit(){
        this._service.checkCredentials();
    }
 
    logout() {
        this._service.logout();
    }
}
