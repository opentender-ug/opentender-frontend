import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {routing} from './download.routing';
import {PipesModule} from '../../modules/pipes/pipes.module';
import {DownloadPage} from './download.component';
import {BreadcrumbModule} from '../../modules/breadcrumb/breadcrumb.module';
import {InfoButtonModule} from '../../modules/info-button/info-button.module';

@NgModule({
	imports: [
		CommonModule,
		PipesModule,
		BreadcrumbModule,
		routing,
		InfoButtonModule
	],
	declarations: [
		DownloadPage,
	]
})
export class DownloadModule {
}
