import {Component, Input, Output, EventEmitter, ElementRef, ViewChild} from '@angular/core';
import {ITable, ITableColumn} from '../../app.interfaces';

@Component({
	selector: 'doc-table',
	templateUrl: 'table.component.html',
	styleUrls: ['table.component.scss']
})
export class TableComponent {
	@Input() table: ITable;
	@Output() sortChange = new EventEmitter();
	@ViewChild('tableWrap') private tableWrap: ElementRef;
	@ViewChild('tableContent') private tableContent: ElementRef;
	public tableHeadingCord = '0';
	get headingTransform() {
		return {
			'transform': `translateY(${this.tableHeadingCord})`
		};
	}
	public hasScroll = false;
	public scrollStyles = {
		transform: '',
		top: '100%'
	};
	public scrollBarStyles = {
		width: '100%',
		transform: ''
	};
	private scrollCord = 0;
	private watchMouseMove = false;
	private mouseStartX = 0;


	ngAfterViewInit() {
		window.addEventListener('scroll', () => {
			this.throttle(this.watchToTableHeading(), 100);
			this.throttle(this.watchTableScrollFix(), 100);
		});
	}

	throttle(func, ms) {

		let isThrottled = false,
			savedArgs,
			savedThis;

		function wrapper() {

			if (isThrottled) {
				savedArgs = arguments;
				savedThis = this;
				return;
			}

			func.apply(this, arguments);

			isThrottled = true;

			setTimeout(function() {
				isThrottled = false;
				if (savedArgs) {
					wrapper.apply(savedThis, savedArgs);
					savedArgs = savedThis = null;
				}
			}, ms);
		}

		return wrapper;
	}

	ngDoCheck() {
		if (this.tableWrap && this.tableContent) {
			let wrapRect = this.tableWrap.nativeElement.getBoundingClientRect();
			let contentRect = this.tableContent.nativeElement.getBoundingClientRect();
			this.hasScroll = wrapRect.width < contentRect.width;
			this.scrollBarStyles.width = `${wrapRect.width / contentRect.width * 100}%`;
		}
	}

	setSort(col: ITableColumn): void {
		if (col.sortBy) {
			if (this.table.sortBy && this.table.sortBy.id === col.sortBy.id) {
				this.sortChange.emit({
					value: {
						id: col.sortBy.id,
						ascend: !this.table.sortBy.ascend
					}
				});
			} else {
				this.sortChange.emit({
					value: {
						id: col.sortBy.id,
						ascend: col.sortBy.ascend
					}
				});
			}
		}
	}
	get fixedTableHeadingConditional(): boolean {
		let rect = this.tableWrap.nativeElement.getBoundingClientRect();
		let elemHeight = rect.bottom - rect.top;
		let screenHeight = window.innerHeight;
		return (
			screenHeight < elemHeight
			&& rect.top < 0
			&& rect.bottom > 300
		);
	}
	private watchToTableHeading(): void {
		if (this.fixedTableHeadingConditional) {
			let rect = this.tableWrap.nativeElement.getBoundingClientRect();
			this.tableHeadingCord = `${rect.top * -1}px`;
		} else {
			this.tableHeadingCord = `0px`;
		}
	}
	get fixedScrollConditional(): boolean {
		let rect = this.tableWrap.nativeElement.getBoundingClientRect();
		let elemHeight = rect.bottom - rect.top;
		let screenHeight = window.innerHeight;
		return (
			screenHeight < elemHeight
			&& rect.top < 300
			&& rect.bottom > screenHeight
		);
	}
	get scrollStylesCord(): string {
		return `translateX(${this.scrollCord}px)`;
	}
	get scrollBarStylesCord() {
		return `translateX(${this.scrollBarCord(this.scrollCord)}px)`;
	}
	public watchTableScrollFix(): void {
		let rect = this.tableWrap.nativeElement.getBoundingClientRect();
		let screenHeight = window.innerHeight;

		if (this.fixedScrollConditional) {
			let topCord = screenHeight - rect.top;
			// tslint:disable-next-line:comment-format
			this.scrollStyles.top = `calc(${ topCord < 0 ? topCord * -1 : topCord }px - 17px)`; //17px = scroll bar height
		} else {
			// tslint:disable-next-line:comment-format
			this.scrollStyles.top = `calc(100% - 17px)`; //17px = scroll bar height
		}
	}
	private scrollBarCord(cord): number {
		let tcw = this.tableContent.nativeElement.getBoundingClientRect().width;
		let tww = this.tableWrap.nativeElement.getBoundingClientRect().width;
		let tableOverflow = tcw - tww;
		let emptySpaces = 100 - tww / tcw * 100;
		let contentCord = cord / tableOverflow * emptySpaces;
		return Math.round(tww / 100 * Math.min(contentCord, emptySpaces));
	}
	public mouseDownHandler(e): void {
		this.watchMouseMove = true;
		this.mouseStartX = e.clientX;
		window.addEventListener('mouseup', this.mouseUpHandler.bind(this));
	}
	public mouseMoveHandler(event): void {
		const SPEED_INDEX = 3;
		if (this.watchMouseMove) {
			if (event.clientX > this.mouseStartX) {
				this.tableWrap.nativeElement.scrollLeft = this.tableWrap.nativeElement.scrollLeft + SPEED_INDEX;
			} else if (event.clientX < this.mouseStartX) {
				this.tableWrap.nativeElement.scrollLeft = this.tableWrap.nativeElement.scrollLeft - SPEED_INDEX;
			}
			this.mouseStartX = event.clientX;
		}
	}
	public mouseUpHandler(): void {
		this.watchMouseMove = false;
	}
	setScrollCord(cord): void {
		this.scrollCord = cord;
		this.scrollStyles.transform = this.scrollStylesCord;
		this.scrollBarStyles.transform = this.scrollBarStylesCord;
	}
}
