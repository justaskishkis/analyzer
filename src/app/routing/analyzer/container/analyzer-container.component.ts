import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'apppre-analyzer-container',
    templateUrl: './analyzer-container.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnalyzerContainerComponent {
}
