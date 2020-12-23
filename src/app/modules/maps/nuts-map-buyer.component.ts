import {Component, Input} from '@angular/core';
import {IStatsNuts} from '../../app.interfaces';
import {I18NService} from '../i18n/services/i18n.service';

@Component({
	selector: 'graph[buyer-nutsmap]',
	template: `
		<div class="graph-title" i18n>
			Buyers by Region
			<info-button>
				<p>See in which region the buyers procuring from this supplier are based. Region information was assigned using raw addresses published on the original source, for more details see the Data Explainer on the About page.</p>
			</info-button>
		</div>
		<div class="graph-toolbar-container">
			<div class="graph-toolbar graph-toolbar-right">
				<button class="tool-button" [ngClass]="{down:map_level==1}" (click)="setLevel(1)" i18n>Counties</button>
			</div>
		</div>
		<graph nutsmap [data]="data" [level]="map_level" [title]="title"></graph>`
})
export class MapBuyersComponent {
	@Input()
	data: IStatsNuts;
	title: string;
	map_level: number = 1;
	constructor(private i18n: I18NService) {
		this.title = this.i18n.get('Buyers');
	}

	setLevel(lvl: number): void {
		this.map_level = lvl;
	}
}
