import {NgModule} from '@angular/core';
import InfoButton from './info-button.component';
import {CommonModule} from '@angular/common';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		InfoButton
	],
	exports: [
		InfoButton
	]
})
export class InfoButtonModule {
}
