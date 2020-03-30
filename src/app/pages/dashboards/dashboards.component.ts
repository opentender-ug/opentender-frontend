import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {I18NService} from '../../modules/i18n/services/i18n.service';
import {TitleService} from '../../services/title.service';

@Component({
	moduleId: __filename,
	selector: 'dashboards',
	template: '<router-outlet></router-outlet>'
})
export class DashboardsPage {
	constructor(private router: Router, private i18n: I18NService, private titleService: TitleService) {
	}
}
