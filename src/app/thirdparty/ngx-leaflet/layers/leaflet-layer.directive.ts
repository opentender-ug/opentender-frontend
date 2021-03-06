import {Directive, Input, NgZone, OnChanges, OnDestroy, OnInit, SimpleChange} from '@angular/core';

import {Layer} from '../../leaflet/layer/Layer';

import {LeafletDirective} from '../core/leaflet.directive';
import {LeafletDirectiveWrapper} from '../core/leaflet.directive.wrapper';


/**
 * Layer directive
 *
 * This directive is used to directly control a single map layer. The purpose of this directive is to
 * be used as part of a child structural directive of the map element.
 *
 */
@Directive({
	selector: '[leafletLayer]'
})
export class LeafletLayerDirective
	implements OnChanges, OnDestroy, OnInit {

	@Input('leafletLayer') layer: Layer;

	// Wrapper for the leaflet directive (manages the parent directive)
	private leafletDirective: LeafletDirectiveWrapper;

	constructor(leafletDirective: LeafletDirective, private zone: NgZone) {
		this.leafletDirective = new LeafletDirectiveWrapper(leafletDirective);
	}

	ngOnInit() {
		// Init the map
		this.leafletDirective.init();

	}

	ngOnDestroy() {
		this.zone.runOutsideAngular(() => {
			this.layer.remove();
		});

	}

	ngOnChanges(changes: { [key: string]: SimpleChange }) {

		if (changes['layer']) {

			// Update the layer
			const p: Layer = changes['layer'].previousValue;
			const n = changes['layer'].currentValue;

			this.zone.runOutsideAngular(() => {
				if (null != p) {
					p.remove();
				}
				if (null != n) {
					this.leafletDirective.getMap().addLayer(n);
				}
			});
		}

	}

}
