import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { DirectionsMapDirective } from '../directions-map-directive.directive';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators, AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
declare var google: any;
@Component({
	selector: 'app-map',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
	title: string = 'My first AGM project';
	lat: number = 51.678418;
	lng: number = 7.809007;
	bookingForm: FormGroup;
	
	@ViewChild("search1")
	public searchElementRef: ElementRef;

	constructor(private _router: Router, formBuilder: FormBuilder, private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {
		this.bookingForm = formBuilder.group({
			tripName: formBuilder.control(''),
			dateFrom: formBuilder.control(''),
			dateTo: formBuilder.control(''),
			originCity: formBuilder.control(''),
			destinationCity: formBuilder.control(''),
		});

	}
	origin = { longitude: 8.815982, latitude: 51.673858 };  // its a example aleatory position
	destination = { longitude: 7.815982, latitude: 51.673858 };  // its a example aleatory position
	markers: marker[] = [
		{
			lat: 51.673858,
			lng: 7.815982,
			label: 'A',
			draggable: true
		},
		{
			lat: 51.373858,
			lng: 7.215982,
			label: 'B',
			draggable: true
		}
	]
	ngOnInit() {
	this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['address']
      });
      autocomplete.addListener('place_changed', () => {

        this.ngZone.run(() => {
          // get the place result
          let selectedPlace = autocomplete.getPlace();
		console.log("selectedPlace- ",selectedPlace);
         // place.formatted_address => is in english, because I didn't setup it.
         // Need to have opportunity for localization of formatted_address
        });
      });
    });

	}
	ngAfterViewInit() {

	}
	onSubmit() {
		console.log(this.bookingForm.value);
		/*    this._prodService.addProduct(this.productForm.value).subscribe(res => {
			  console.log(res);
			  if(res.status==1){
				alert('Product Inserted successfully Pin no.'+res.data.pin);
				 this._router.navigate(['report']);
			  }else{
				alert('something went wrong..');
			  }
		
			}, err => {
			  console.log(err);
			});*/
	}


}
// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
