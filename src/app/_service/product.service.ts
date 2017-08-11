import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductService {

  constructor(private http: Http) { }
  getIpcFromServer() {
    return this.http.get(`http://localhost:6001/product/getIpCouncil`)
      .map((response) => response.json())
      .catch((e) => {
        return Observable.throw(
          new Error(`${e.status} ${e.statusText}`)
        );
      });
  }
  getBrandsFromServer() {
    return this.http.get(`http://localhost:6001/product/getAllBrands`)
      .map((response) => response.json())
      .catch((e) => {
        return Observable.throw(
          new Error(`${e.status} ${e.statusText}`)
        );
      }).toPromise();
  }
  getLicenseeFromServer() {
    return this.http.get(`http://localhost:6001/product/getManufacturer`)
      .map((response) => response.json())
      .catch((e) => {
        return Observable.throw(
          new Error(`${e.status} ${e.statusText}`)
        );
      });
  }
  getDimmableFromServer() {
    return this.http.get(`http://localhost:6001/product/getDimmable`)
      .map((response) => response.json())
      .catch((e) => {
        return Observable.throw(
          new Error(`${e.status} ${e.statusText}`)
        );
      });
  }
  getManufacturerFromServer() {
    return this.http.get(`http://localhost:6001/product/getManufacturer`)
      .map((response) => response.json())
      .catch((e) => {
        return Observable.throw(
          new Error(`${e.status} ${e.statusText}`)
        );
      });
  }
  getAppAreaFromServer() {
    return this.http.get(`http://localhost:6001/product/getApplicationArea`)
      .map((response) => response.json())
      .catch((e) => {
        return Observable.throw(
          new Error(`${e.status} ${e.statusText}`)
        );
      });
  }
  getManCountryFromServer() {
    return this.http.get(`http://localhost:6001/product/getManCountry`)
      .map((response) => response.json())
      .catch((e) => {
        return Observable.throw(
          new Error(`${e.status} ${e.statusText}`)
        );
      });
  }
  getLightCategoryFromServer() {
    return this.http.get(`http://localhost:6001/product/getLightCategory`)
      .map((response) => response.json())
      .catch((e) => {
        return Observable.throw(
          new Error(`${e.status} ${e.statusText}`)
        );
      });
  }
  getStorageLocationFromServer() {
    return this.http.get(`http://localhost:6001/product/getStorageLocation`)
      .map((response) => response.json())
      .catch((e) => {
        return Observable.throw(
          new Error(`${e.status} ${e.statusText}`)
        );
      });
  }
  addProduct(product:any){
let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    // let body = JSON.stringify(user);
    // console.log(body);
    return this.http.post('http://localhost:6001/product/create', product, headers).
      map((res: Response) => res.json())
      .catch((e) => {
        return Observable.throw(
          new Error(`${e.status} ${e.statusText}`)
        );
      });
  }
}
