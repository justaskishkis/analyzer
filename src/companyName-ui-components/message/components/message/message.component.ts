import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IMessageMod } from '../../message.models';

@Component({
	selector: 'companypre-message',
	templateUrl: './message.component.html',
	styleUrls: ['./message.component.styl'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageComponent {
	@Input() text: string;

	@Input() mod: IMessageMod;
}
