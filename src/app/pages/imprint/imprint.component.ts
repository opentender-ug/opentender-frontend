import {Component} from '@angular/core';
import {ConfigService} from '../../services/config.service';

@Component({
	moduleId: __filename,
	selector: 'imprint',
	templateUrl: 'imprint.component.html',
	styleUrls: ['imprint.component.scss']
})
export class ImprintPage {
	public contactmail: string;

	constructor(private config: ConfigService) {
		this.contactmail = config.contactmail;
	}
}
