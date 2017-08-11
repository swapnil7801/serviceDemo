import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SubsystemInProductComponent } from './subsystem-in-product/subsystem-in-product.component';
import { ProductInSubsystemComponent } from './product-in-subsystem/product-in-subsystem.component';
import { LogoutComponent } from './logout/logout.component';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './app.routes';
import { ReportsComponent } from './reports/reports.component';
import {ReportServiceService} from './report-service.service';
import {NgxPaginationModule} from 'ngx-pagination';
import {ReactiveFormsModule} from '@angular/forms';
import { ProductWithDriverComponent } from './product-with-driver/product-with-driver.component';
import { DriverInProductComponent } from './driver-in-product/driver-in-product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import{ProductService} from './_service/product.service';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FileUploader } from 'ng2-file-upload';
import { FileDropDirective, FileSelectDirective } from 'ng2-file-upload';
import { MapComponent } from './map/map.component';
import { DirectionsMapDirective } from './directions-map-directive.directive';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SubsystemInProductComponent,
    ProductInSubsystemComponent,
    LogoutComponent,
    ReportsComponent,
    ProductWithDriverComponent,
    DriverInProductComponent,
    CreateProductComponent,
    FileUploadComponent,
    FileDropDirective,
    FileSelectDirective,
    MapComponent,
    DirectionsMapDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxPaginationModule,
    
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAZPC8J5Kb7okrddLAfdShz5TID4JjuHqk',
      libraries: ["places"]
    })
  ],
  providers: [ReportServiceService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
