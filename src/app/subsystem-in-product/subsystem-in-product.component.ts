import { ViewContainerData } from '@angular/core/src/view';
import { log } from 'util';
import { OnInit } from '@angular/core/core';
import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {ReportServiceService} from '../report-service.service';
import 'rxjs/Rx';

interface IServerResponse {
    data: string[];
    total: number;
}
@Component({
  selector: 'app-subsystem-in-product',
  templateUrl: './subsystem-in-product.component.html',
  styleUrls: ['./subsystem-in-product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubsystemInProductComponent implements OnInit {

 constructor(private _httpService: ReportServiceService) { }
    reportType='SUBSYSTEMINPRODUCT';
    asyncResult: Observable<string[]>;
    p: number ;
    total: number;
    loading: boolean;
    result:any;
        ngOnInit() {
        this.getPage(1);
    }

     getPage(page: number) {
         console.log('get page',page);
        this.loading = true;
            const perPage = 10;
            const start = (page - 1) * perPage;
            // const end = start + perPage;
            // console.log(`start-${start}`)
           this.asyncResult=this._httpService.getReportFromServer(this.reportType,start)
           .do(res => {
                this.total = res.count;
                this.p = page;
                this.loading = false;
            })
            .map(res => res.data);
    }
}
