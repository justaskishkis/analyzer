import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IScrapingHistoryItem } from '../../../../app/routing/analyzer/features/scrape-website/state/scrape-website.models';

@Component({
	selector: 'companypre-list-text',
	templateUrl: './list-text.component.html',
	styleUrls: ['./list-text.component.styl'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListTextComponent {
	@Input() data: IScrapingHistoryItem[];

	@Output() itemClicked = new EventEmitter<IScrapingHistoryItem>();

	emitItem(item: IScrapingHistoryItem): void {
		this.itemClicked.emit(item);
	}
}
