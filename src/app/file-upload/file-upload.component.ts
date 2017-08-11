import { FileUploader } from 'ng2-file-upload';
const URL = 'http://localhost:6001/api/product/uploadParSeqFile/170208';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/Rx';

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
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
// uploader = new FileUploader({url: `YOUR URL`});
  constructor(private _httpService: ReportServiceService) { 
    
  }
asyncResult: Observable<string[]>;
  ngOnInit() {
    this.getPage();
  }
    public uploader:FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;
 
  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
 
  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }
     getPage() {
            // const end = start + perPage;
            // console.log(`start-${start}`)
           this.asyncResult=this._httpService.getPaseqFilesFromServer()
           .do(res => {
            })
            .map(res => res.data);
    }
}
