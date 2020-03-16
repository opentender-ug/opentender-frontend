import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GraphSectorTreeMap} from './sector-treemap.component';
import {GraphFooterModule} from '../../graph-footer/graph-footer.module';
import {TreeMapModule} from '../../../thirdparty/ngx-charts-universal/tree-map/tree-map.module';
import {CommonTooltipModule} from '../../../thirdparty/ngx-charts-universal/common/tooltip/common-tooltip.module';
import {RouterModule} from '@angular/router';
import {PageScrollModule} from '../../page-scroll/page-scroll.module';

@NgModule({
	imports: [
		CommonModule,
		TreeMapModule,
		GraphFooterModule,
		CommonTooltipModule,
		RouterModule,
		PageScrollModule,
	],
	declarations: [
		GraphSectorTreeMap,
	],
	exports: [
		GraphSectorTreeMap
	]
})
export class GraphsTreeMapModule {
}
