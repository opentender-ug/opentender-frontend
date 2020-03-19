import {Component} from '@angular/core';

@Component({
	moduleId: __filename,
	selector: 'info-button',
	templateUrl: 'info-button.component.html',
	styleUrls: ['info-button.component.scss']
})
export default class InfoButton {
	public showContent = false;

	public showContentBlock(): void {
		this.showContent = true;
	}
	public hideContentBlock(): void {
		this.showContent = false;
	}
}
