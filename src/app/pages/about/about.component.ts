import {Component} from '@angular/core';
import {I18NService} from '../../modules/i18n/services/i18n.service';
import {Router} from '@angular/router';
import {TitleService} from '../../services/title.service';

/**
 * The /about/ root component displays the subpages header
 */

@Component({
	moduleId: __filename,
	selector: 'about',
	template: '<router-outlet></router-outlet>'
})
export class AboutPage {
	constructor(private router: Router, private i18n: I18NService, private titleService: TitleService) {
	}
}
