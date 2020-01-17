// tslint:disable:no-implicit-dependencies
import { storiesOf } from '@storybook/angular';
import { CompanyPreMessageModule } from './message.module';
import { withKnobs, select } from '@storybook/addon-knobs';
import { IMessageMod } from './message.models';

storiesOf('UI|Message', module)
	.addDecorator(withKnobs)
	.add('All', () => {
		const mod = select<IMessageMod>('Mod', ['info', 'danger'], 'info');

		return {
			moduleMetadata: {
				imports: [CompanyPreMessageModule],
			},
			template: `
				<div style="padding: 32px;">
					<companypre-message
						[mod]="mod"
						[text]="'Demo message'">
					</companypre-message>
				</div>
			`,
			props: {
				mod,
			},
		};
	});
