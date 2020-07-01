import {Component, Input} from '@angular/core';
import Address = Definitions.Address;

@Component({
	moduleId: __filename,
	selector: 'body-address',
	template: `
		<div *ngIf="address">
			<div *ngIf="address.street | defined">{{address.street}}</div>
			<div *ngIf="(address.postcode||address.city) | defined"><span *ngIf="address.postcode | defined">{{address.postcode}}, </span>{{address.city}}</div>
			<div *ngIf="authorityName | defined"><a [routerLink]="['/region/'+address.ot.nutscode]">{{authorityName | nameGuard}}</a></div>
			<div *ngIf="address.country | defined">{{address.country | expandCountry}}</div>
		</div>
	`
})
export class BodyAddressComponent {
	@Input() public address: Address;
	@Input() public authorityName: string;
}
