import { log } from 'util';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService, User } from '../authentication-service.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [AuthenticationService]
})
export class LoginComponent {

    public user = new User('', '');
    public errorMsg = '';

    constructor(private _router: Router, private _service: AuthenticationService) { }

    login() {
        if(this._service.login(this.user)){
            // this.errorMsg = 'Failed to login';
            this.errorMsg = 'redirecting'
        }else{
            this.errorMsg = 'Failed to login';
        }
    }
    // login() {
    //     let respnoseflag:boolean;
    //     let self = this;
    //     this._service.login_api(this.user).subscribe(
    //         function (response) {
    //             console.log("Success Response", response.status);
    //             if (response.status == 1) {
    //                 localStorage.setItem("user", this.user);
    //                 self._router.navigate(['report']);
    //                 this.errorMsg = 'Redirecting';
    //                 this.respnoseflag=true;
    //                 return true;
    //             } else {
    //                 console.log('failed...');
    //                 this.errorMsg = 'failed to Login.';
    //                 this.respnoseflag=false;
    //                 return false;
    //             }
    //         },
    //         function(error) { console.log("Error happened" + error); },
    //         function(){
    //             if(this.respnoseflag){
    //                 this.errorMsg = 'Redirecting';

    //             }else{
    //                 this.errorMsg = 'failed to Login.';
    //             }

    //         }
            
    //     );
    // }


}