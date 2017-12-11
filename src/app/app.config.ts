import {FormsModule} from '@angular/forms';
import {Title} from '@angular/platform-browser';
import {TypeaheadModule} from './thirdparty/typeahead/typeahead.module';
import {SliderModule} from './components/slider/silder.module';
import {AppRoutingModule} from './app.routes';
import {ToastrModule} from 'ngx-toastr';
import {CommonTooltipModule} from './thirdparty/ngx-charts-universal/common/tooltip/common-tooltip.module';
import {TreeMapModule} from './thirdparty/ngx-charts-universal/tree-map/tree-map.module';
import {PieChartModule} from './thirdparty/ngx-charts-universal/pie-chart/pie-chart.module';
import {BarChartModule} from './thirdparty/ngx-charts-universal/bar-chart/bar-chart.module';
import {MyDatePickerModule} from 'mydatepicker';

import {App} from './app.component';

import {DefinedPipe} from './directives/defined.pipe';
import {EncodeURIComponentPipe} from './directives/encode-uri.pipe';
import {EuropamLinkPipe} from './directives/europam-url.pipe';
import {ExpandCountryPipe} from './directives/expand-country.pipe';
import {ExpandUnderlinedPipe} from './directives/expand-underlined.pipe';
import {ExtractDomainPipe} from './directives/extract-domain.pipe';
import {FOISearchLinkPipe} from './directives/foi-search-url.pipe';
import {FormatCurrencyValuePipe, FormatCurrencyPipe} from './directives/format-currency';
import {FormatDatePipe} from './directives/format-date.pipe';
import {FormatDatetimePipe} from './directives/format-datetime.pipe';
import {FormatFileSizePipe} from './directives/format-filesize.pipe';
import {FormatNumberPipe} from './directives/format-number';
import {NameGuardPipe} from './directives/name-guard.pipe';
import {I18nPipe} from './directives/i18n.pipe';
import {FormatIndicatorNamePipe} from './directives/format-indicator.pipe';

import {AuthorityPage} from './pages/authority/authority.component';
import {CompanyPage} from './pages/company/company.component';
import {AboutPage} from './pages/about/about.component';
import {AboutOpentenderPage} from './pages/about/opentender/opentender.component';
import {AboutFOIPage} from './pages/about/foi/foi.component';
import {AboutHowPage} from './pages/about/how/how.component';
import {AboutDataQualityPage} from './pages/about/quality/quality.component';
import {DownloadPage} from './pages/download/download.component';
import {DashboardsAdministrativeCapacityPage} from './pages/dashboards/administrative-capacity/administrative-capacity.component';
import {DashboardsIntegrityPage} from './pages/dashboards/procurement-integrity/procurement-integrity.component';
import {DashboardsPage} from './pages/dashboards/dashboards.component';
import {DashboardsMarketAnalysisPage} from './pages/dashboards/market-analysis/market-analysis.component';
import {DashboardsTransparencyPage} from './pages/dashboards/transparency/transparency.component';
import {HomePage} from './pages/home/home.component';
import {ImprintPage} from './pages/imprint/imprint.component';
import {RegionPage} from './pages/region/region.component';
import {SearchAuthorityPage} from './pages/search/authority/authority.component';
import {SearchCompanyPage} from './pages/search/company/company.component';
import {SearchPage} from './pages/search/search.component';
import {SearchSectorPage} from './pages/search/sector/sector.component';
import {SearchTenderPage} from './pages/search/tender/tender.component';
import {SectorPage} from './pages/sector/sector.component';
import {StartPage} from './pages/start/start.component';
import {TenderPage} from './pages/tender/tender.component';
import {TestPage} from './pages/test/test.component';

import {ApiService} from './services/api.service';
import {ConfigService} from './services/config.service';
import {PlatformService} from './services/platform.service';
import {StateService} from './services/state.service';
import {TitleService} from './services/title.service';
import {I18NService} from './services/i18n.service';
import {NotifyService} from './services/notify.service';

import {AboutGlossaryPage} from './pages/about/glossary/glossary.component';
import {AuthorityTableComponent} from './components/tables/authority/table-authority.component';
import {AutoCompleteComponent} from './components/searchbox/components/autocomplete/autocomplete.component';
import {CompanyTableComponent} from './components/tables/company/table-company.component';
import {DashboardsIndicatorComponent} from './components/dashboard/indicator-dashboard.component';
import {DialogComponent} from './components/dialog/dialog.component';
import {FilterBoxComponent} from './components/filterbox/filterbox.component';
import {FooterComponent} from './components/footer/footer.component';
import {GraphAuthoritiesComponent} from './components/graphs/authorities.component';
import {GraphCompaniesComponent} from './components/graphs/companies.component';
import {GraphHistogramComponent} from './components/graphs/histogram.component';
import {GraphHomeHistogramComponent} from './components/graphs/home-histogram.component';
import {GraphIndicatorHistogramComponent} from './components/graphs/indicator-histogram.component';
import {GraphIndicatorScoreHistogramComponent} from './components/graphs/score-histogram.component';
import {GraphIndicatorSectorsComponent} from './components/graphs/indicator-sectors.component';
import {GraphIndicatorStructureComponent} from './components/graphs/indicator-structure.component';
import {GraphProcedureTypesComponent} from './components/graphs/procedure-types.component';
import {GraphScoreSectorsComponent} from './components/graphs/score-sectors.component';
import {GraphSectorsComponent} from './components/graphs/sectors.component';
import {GraphSectorTreemap} from './components/graphs/sector-treemap.component';
import {HeaderComponent} from './components/header/header.component';
import {I18NComponent} from './components/i18n.component';
import {MapBuyersComponent} from './components/maps/nuts-map-buyer.component';
import {NUTSMapComponent} from './components/maps/nuts-map.component';
import {MapHomeComponent} from './components/maps/nuts-map-home.component';
import {MapPortalComponent} from './components/maps/nuts-map-portal.component';
import {MapSuppliersComponent} from './components/maps/nuts-map-supplier.component';
import {MapVolumeComponent} from './components/maps/nuts-map-volume.component';
import {PageScrollDirective} from './directives/page-scroll.directive';
import {PaginationComponent} from './components/tables/components/pagination/pagination.component';
import {SearchBoxComponent} from './components/searchbox/searchbox.component';
import {SelectColumnsButtonComponent} from './components/tables/components/select-columns-button/select-columns-button.component';
import {SelectColumnsComponent} from './components/tables/components/select-columns/select-columns.component';
import {SelectDateFilterComponent} from './components/filterbox/components/date/select-date-filter-component';
import {SelectDownloadSeriesComponent} from './components/selects/download-series/select-download-series.component';
import {SelectFiltersButtonComponent} from './components/filterbox/components/select-filters-button/select-filters-button.component';
import {SelectFiltersComponent} from './components/filterbox/components/select-filters/select-filters.component';
import {SelectScoreRangeFilterComponent} from './components/filterbox/components/score-range/select-score-range-filter.component';
import {SelectSearchesButtonComponent} from './components/searchbox/components/select-search-button/select-search-button.component';
import {SelectSimilarListComponent} from './components/selects/similar-list/select-similar-list.component';
import {SelectYearRangeFilterComponent} from './components/filterbox/components/year-range/select-year-range-filter.component';
import {TableComponent} from './components/tables/table.component';
import {TenderBodyComponent, TenderPriceComponent, TenderBodyAddressComponent, TenderBodyLineComponent, CollapseExpandComponent} from './components/tender.components';
import {TenderTableComponent} from './components/tables/tender/table-tender.component';
import {ValueInputComponent} from './components/searchbox/components/value-input/value-input.component';
import {GraphScoreGridComponent} from './components/graphs/score-grid.component';
import {SelectYearRangeComponent} from './components/selects/year-range/select-year-range.component';
import {GraphBenchmarksComponent} from './components/graphs/benchmarks.component';
import {MapComponent} from './components/maps/leaflet.component';

const AppConfig = {
	declarations: [
		App,

		AuthorityTableComponent,
		AutoCompleteComponent,
		CollapseExpandComponent,
		CompanyTableComponent,
		DialogComponent,
		FilterBoxComponent,
		FooterComponent,
		HeaderComponent,
		PaginationComponent,
		MapComponent,
		NUTSMapComponent,
		MapHomeComponent,
		MapPortalComponent,
		MapSuppliersComponent,
		MapBuyersComponent,
		MapVolumeComponent,
		SearchBoxComponent,
		SelectColumnsButtonComponent,
		SelectColumnsComponent,
		SelectDownloadSeriesComponent,
		SelectSearchesButtonComponent,
		SelectFiltersButtonComponent,
		SelectFiltersComponent,
		SelectYearRangeComponent,
		SelectYearRangeFilterComponent,
		SelectScoreRangeFilterComponent,
		SelectDateFilterComponent,
		SelectSimilarListComponent,
		TableComponent,
		TenderBodyAddressComponent,
		TenderBodyComponent,
		TenderBodyLineComponent,
		TenderPriceComponent,
		TenderTableComponent,
		ValueInputComponent,
		DashboardsIndicatorComponent,
		GraphBenchmarksComponent,
		GraphIndicatorHistogramComponent,
		GraphIndicatorSectorsComponent,
		GraphIndicatorStructureComponent,
		GraphSectorsComponent,
		GraphHistogramComponent,
		GraphAuthoritiesComponent,
		GraphCompaniesComponent,
		GraphProcedureTypesComponent,
		GraphHomeHistogramComponent,
		GraphIndicatorScoreHistogramComponent,
		GraphScoreGridComponent,
		GraphScoreSectorsComponent,
		GraphSectorTreemap,
		I18NComponent,
		DefinedPipe,
		EuropamLinkPipe,
		ExpandCountryPipe,
		ExpandUnderlinedPipe,
		ExtractDomainPipe,
		EncodeURIComponentPipe,
		NameGuardPipe,
		FormatCurrencyPipe,
		FormatCurrencyValuePipe,
		FormatDatePipe,
		FormatDatetimePipe,
		FormatFileSizePipe,
		FormatIndicatorNamePipe,
		FOISearchLinkPipe,
		FormatNumberPipe,
		I18nPipe,

		AuthorityPage,
		CompanyPage,
		AboutPage,
		AboutOpentenderPage,
		AboutGlossaryPage,
		AboutFOIPage,
		AboutHowPage,
		AboutDataQualityPage,
		DownloadPage,
		DashboardsAdministrativeCapacityPage,
		DashboardsIntegrityPage,
		DashboardsPage,
		DashboardsMarketAnalysisPage,
		DashboardsTransparencyPage,
		HomePage,
		ImprintPage,
		RegionPage,
		SearchAuthorityPage,
		SearchCompanyPage,
		SearchPage,
		SearchSectorPage,
		SearchTenderPage,
		SectorPage,
		StartPage,
		TenderPage,
		TestPage,

		PageScrollDirective
	],
	imports: [
		FormsModule,
		TreeMapModule,
		PieChartModule,
		BarChartModule,
		CommonTooltipModule,
		SliderModule,
		TypeaheadModule,
		ToastrModule.forRoot(),
		MyDatePickerModule,
		AppRoutingModule
	],
	providers: [
		TitleService,
		ConfigService,
		StateService,
		PlatformService,
		I18NService,
		NotifyService,
		Title,
		ApiService
	]
};

export {App, AppConfig};
