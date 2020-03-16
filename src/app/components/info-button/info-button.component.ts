import {Component} from '@angular/core';


@Component({
	moduleId: __filename,
	selector: 'info-button',
	templateUrl: 'info-button.component.html',
	styleUrls: ['info-button.component.scss']
})
export default class InfoButton {
	public showContent = false;
	private showContentBlock(): void {
		this.showContent = true;
	}
	private hideContentBlock(): void {
		this.showContent = false;
	}
	public text = 'sfsagdsgdg';
}
