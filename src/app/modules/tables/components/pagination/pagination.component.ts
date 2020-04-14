import {Component, Input, OnChanges, OnInit, SimpleChanges, EventEmitter, Output} from '@angular/core';

@Component({
	selector: 'pagination',
	templateUrl: 'pagination.component.html',
	styleUrls: ['pagination.component.scss']
})
export class PaginationComponent implements OnChanges, OnInit {
	@Input() total: number;
	@Input() defaultPageSize: number;
	@Input() defaultPage: number;
	@Output() paginationChange = new EventEmitter();

	public pagination = {
		pageCount: 0,
		pageSize: 10,
		page: 0,
		total: 0,
		quick: [],
		pages: [],
	};
	private DEFAULT_PAGES_LENGTH = 13;

	constructor() {
	}

	public ngOnInit(): void {
		this.pagination.pageSize = this.defaultPageSize || 10;
		this.pagination.page = this.defaultPage || 0;
	}

	public ngOnChanges(changes: SimpleChanges): void {
		if (changes['total']) {
			this.display(changes['total'].currentValue);
		} else if (changes['defaultPageSize']) {
			this.pagination.pageSize = changes['defaultPageSize'].currentValue;
		} else if (changes['defaultPage']) {
			this.pagination.page = changes['defaultPage'].currentValue;
		}
	}

	public page(page: number) {
		if (page === this.pagination.page) {
			return;
		}
		if (page < 0) {
			this.pagination.page = 0;
		} else if (page >= this.pagination.pageCount)  {
			this.pagination.page = this.pagination.pageCount - 1;
		} else {
			this.pagination.page = page;
		}
		this.triggerChange();
	}

	private triggerChange() {
		this.paginationChange.emit({value: this.pagination});
		this.setPaginationItems();
	}

	public onPageSizeChange() {
		this.display(this.pagination.total);
		this.resetPagination();
		this.triggerChange();
	}

	private display(total: number): void {
		this.pagination.total = total;
		this.pagination.pageCount = Math.ceil(this.pagination.total / this.pagination.pageSize);
		this.pagination.quick = [];
		let current = this.pagination.page;
		let items: Array<any> = [current];
		let back = 0;
		let front = 0;
		while (items.length < 3) {
			if (current - front > 0) {
				front++;
				items.unshift(current - front);
			}
			if (current + back < this.pagination.pageCount) {
				back++;
				items.push(current + back);
			}
			if ((current - front == 0) && (current + back == this.pagination.pageCount)) {
				break;
			}
		}
		let sep = false;
		for (let i = 2; i >= 0; i--) {
			if (items.indexOf(i) < 0) {
				if (!sep) {
					items.unshift('sep');
				}
				sep = true;
				items.unshift(i);
			}
		}
		this.setPaginationItems();
	}
	public isNumber(item) {
		return Number.isInteger(item);
	}

	public setPaginationItems() {
		if (this.pagination.pageCount <= this.DEFAULT_PAGES_LENGTH) {
			this.pagination.pages = this.smallCountFlow();
		} else {
			this.pagination.pages = this.bigCountFlow();
		}
	}
	private smallCountFlow() {
		let pages = [];
		for (let i = 0; i < this.DEFAULT_PAGES_LENGTH; i++) {
			pages.push(i < this.pagination.pageCount ? i + 1 : '');
		}
		return pages;
	}
	private bigCountFlow() {
		const CENTER_INDEX = 6;
		const END_INDEX = 7;
		let pages;
		if (this.pagination.page - CENTER_INDEX <= 0) {
			pages = this.fillPages(CENTER_INDEX, false, true);
		} else if (this.pagination.page + END_INDEX >= this.pagination.pageCount) {
			pages = this.fillPages(this.pagination.pageCount - END_INDEX, true, false);
		} else {
			pages = this.fillPages(this.pagination.page, true, true);
		}
		return pages;
	}

	private fillPages(page, leftDotted, rightDotted) {
		const pageFormatted = page + 1;
		const pages = [];
		const leftSideLength = leftDotted ? 5 : 6;
		const rightSideLength = rightDotted ? 5 : 6;
		const dots = '...';
		if (leftDotted) {
			pages.push(dots);
		}
		for (let i = leftSideLength; i >= 1; i--) {
			pages.push(pageFormatted - i);
		}
		pages.push(pageFormatted);
		for (let i = 1; i <= rightSideLength; i++) {
			pages.push(pageFormatted + i);
		}
		if (rightDotted) {
			pages.push(dots);
		}
		return pages;
	}
	private resetPagination() {
		this.pagination.page = 0;
	}
}
