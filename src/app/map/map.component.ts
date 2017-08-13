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
	public latitude: number;
	public longitude: number;
	bookingForm: FormGroup;
	public zoom: number;
	public formData: any;
	@ViewChild("originSearch")
	public originSearchRef: ElementRef;

	@ViewChild("destinationSearch")
	public destinationSearchRef: ElementRef;

	@ViewChild(DirectionsMapDirective) vc: DirectionsMapDirective;

	constructor(private _router: Router, formBuilder: FormBuilder, private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {
		this.bookingForm = formBuilder.group({
			tripName: formBuilder.control(''),
			dateFrom: formBuilder.control(''),
			dateTo: formBuilder.control(''),
			originSearch: formBuilder.control(''),
			destinationSearch: formBuilder.control(''),
		});

	}
	origin = { longitude: 8.815982, latitude: 51.673858 };  // its a example aleatory position
	destination = { longitude: 7.815982, latitude: 51.673858 };  // its a example aleatory position

	ngOnInit() {
		this.zoom = 4;
		this.latitude = 39.8282;
		this.longitude = -98.5795;
		this.mapsAPILoader.load().then(() => {
			//for Origin City

			let autocomplete = new google.maps.places.Autocomplete(this.originSearchRef.nativeElement, {
				types: ['address']
			});

			autocomplete.addListener('place_changed', () => {

				this.ngZone.run(() => {
					// get the place result
					let selectedPlace = autocomplete.getPlace();
					// console.log("selectedPlace- ",selectedPlace.name);
					//verify result
					if (selectedPlace.geometry === undefined || selectedPlace.geometry === null) {
						return;
					}
					//set latitude, longitude and zoom
					this.origin.latitude = selectedPlace.geometry.location.lat();
					this.origin.longitude = selectedPlace.geometry.location.lng();
					// console.log("originSearchRef lat- ",this.origin.latitude);
					// console.log("originSearchRef lng- ", this.origin.longitude);
					this.vc.origin = this.origin;
					this.vc.originPlaceId = selectedPlace.place_id;
					if (this.vc.directionsDisplay === undefined) {
						this.mapsAPILoader.load().then(() => {
							this.vc.directionsDisplay = new google.maps.DirectionsRenderer;
						});
					}
					this.bookingForm.patchValue({originSearch: selectedPlace.name})
					this.vc.updateDirections();
					this.zoom = 12;
				});
			});

			//////for desitnation City
			let autocomplete_destination = new google.maps.places.Autocomplete(this.destinationSearchRef.nativeElement, {
				types: ['address']
			});

			autocomplete_destination.addListener('place_changed', () => {

				this.ngZone.run(() => {
					this.vc.destinationPlaceId;
					this.vc.destination;
					// get the place result
					let destination_selectedPlace = autocomplete_destination.getPlace();
					// console.log("selectedPlace- ",selectedPlace);
					//set latitude, longitude and zoom
					this.destination.latitude = destination_selectedPlace.geometry.location.lat();
					this.destination.longitude = destination_selectedPlace.geometry.location.lng();
					// console.log("originSearchRef lat des- ", this.destination.latitude);
					// console.log("originSearchRef lng des- ", this.destination.longitude);
					this.vc.destination = this.destination;
					this.vc.destinationPlaceId = destination_selectedPlace.place_id;
					this.bookingForm.patchValue({destinationSearch: destination_selectedPlace.name})
					this.vc.updateDirections();
					if (this.vc.directionsDisplay === undefined) {
						this.mapsAPILoader.load().then(() => {
							this.vc.directionsDisplay = new google.maps.DirectionsRenderer;
						});
					}
					this.zoom = 12;
					// place.formatted_address => is in english, because I didn't setup it.
					// Need to have opportunity for localization of formatted_address
				});
			});
		});
	}
	onSubmit() {
		// console.log(this.bookingForm.value);
		// console.log();

		this.formData = this.bookingForm.value;
	}
}
