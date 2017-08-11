import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class ReportServiceService {
  // Resolve HTTP using the constructor
  constructor(private http: Http) { }
  // private instance variable to hold base url
  //private url = 'localhost:6001/reports/displayreport/SUBSYSTEMINPRODUCT/60'; 

  getReportFromServer(reportType:string,offset: number) {
    console.log(`executing api call http://localhost:6001/reports/displayreport/${reportType}/` + offset);
    return this.http.get(`http://localhost:6001/reports/displayreport/${reportType}/${offset}`)
      .map((response) => response.json())
      .catch((e) => {
        return Observable.throw(
          new Error(`${e.status} ${e.statusText}`)
        );
      });
  }
  getPaseqFilesFromServer() {
    console.log(`executing api call http://localhost:6001/api/product/ParSeqFileNames/170208 `);
    return this.http.get(`http://localhost:6001/api/product/ParSeqFileNames/170208`)
      .map((response) => response.json())
      .catch((e) => {
        return Observable.throw(
          new Error(`${e.status} ${e.statusText}`)
        );
      });
  }
}