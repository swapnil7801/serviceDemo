import { ProductService } from '../_service/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators, AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})

export class CreateProductComponent implements OnInit {

  ipcList: any;
  productBrandList: any;
  LicenseeList: any;
  dimmableList: any;
  manufacturerList: any;
  appAreaList: any;
  manCountryList: any;
  lightCatList: any;
  storageLocationList: any;
  productForm: FormGroup;

  constructor(private _router: Router,formBuilder: FormBuilder, private _prodService: ProductService) {
    this.productForm = formBuilder.group({
      productType: formBuilder.control('', [Validators.required]),
      productName: formBuilder.control('', [Validators.required]),
      ipc: formBuilder.control('', [Validators.required]),
      barCode: formBuilder.control(''),
      orderCode: formBuilder.control(''),
      product_brand: formBuilder.control(''),
      licensee: formBuilder.control(''),
      dimmable: formBuilder.control(''),
      manufacturer: formBuilder.control(''),
      appArea: formBuilder.control(''),
      man_country: formBuilder.control(''),
      light_cat: formBuilder.control(''),
      notes: formBuilder.control(''),
      storage_location: formBuilder.control(''),
      coordinate: formBuilder.control(''),

    });

  }
  ngOnInit() {
    this._prodService.getIpcFromServer().subscribe(res => {
      this.ipcList = res.data;
    });
    this._prodService.getBrandsFromServer().then((result) => {
      this.productBrandList = result.data;
    })
      .catch((error) => console.error(error));

    this._prodService.getLicenseeFromServer().subscribe(res => {
      this.LicenseeList = res.data;
    });
    this._prodService.getDimmableFromServer().subscribe(res => {
      this.dimmableList = res.data;
    });
    this._prodService.getManufacturerFromServer().subscribe(res => {
      this.manufacturerList = res.data;
    });
    this._prodService.getManCountryFromServer().subscribe(res => {
      this.manCountryList = res.data;
    });
    this._prodService.getAppAreaFromServer().subscribe(res => {
      this.appAreaList = res.data;
    });
    this._prodService.getLightCategoryFromServer().subscribe(res => {
      this.lightCatList = res.data;
    });
    this._prodService.getStorageLocationFromServer().subscribe(res => {
      this.storageLocationList = res.data;
    });
  }
  onSubmit() {
    console.log(this.productForm.value);
    // this._prodService.addProduct(this.productForm.value).subscribe()

    this._prodService.addProduct(this.productForm.value).subscribe(res => {
      console.log(res);
      if(res.status==1){
        alert('Product Inserted successfully Pin no.'+res.data.pin);
         this._router.navigate(['report']);
      }else{
        alert('something went wrong..');
      }

    }, err => {
      console.log(err);
    });
  }

  // simpleAsync: AsyncValidatorFn = (c: AbstractControl) => new Promise<ValidationErrors>((res, rej) => {
  //   setTimeout(() => {
  //     if (c.value === 'a') res({ isValid: 'Its not' });
  //     else res(null);
  //   }, 1000);
  // });
}

