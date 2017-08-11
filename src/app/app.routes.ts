import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProductInSubsystemComponent } from './product-in-subsystem/product-in-subsystem.component';
import { ReportsComponent } from './reports/reports.component';
import { SubsystemInProductComponent } from './subsystem-in-product/subsystem-in-product.component';
import { ProductWithDriverComponent } from './product-with-driver/product-with-driver.component';
import { DriverInProductComponent } from './driver-in-product/driver-in-product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { MapComponent } from './map/map.component';



export const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'logout', component: LogoutComponent
  },
  {
    path: 'report', component: ReportsComponent, children: [
      { path: 'productReport', component: ProductInSubsystemComponent },
      { path: 'subsystemInProduct', component: SubsystemInProductComponent },
      { path: 'productwithdriver', component: ProductWithDriverComponent },
      { path: 'driverInProduct', component: DriverInProductComponent }
    ]
  },
  {
    path: 'createProduct', component: CreateProductComponent
  },
  { path: 'map', component: MapComponent }

];
