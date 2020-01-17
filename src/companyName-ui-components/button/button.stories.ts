// tslint:disable:no-implicit-dependencies
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';
import { CompanyPreButtonModule } from './button.module';
import { ButtonExampleComponent } from './components/button-example/button-example.component';

storiesOf('UI|Button', module)
	.addDecorator(withKnobs)
	.add('Primary', () => {
		const disabled = boolean('Disabled', false);

		return {
			moduleMetadata: {
				imports: [CompanyPreButtonModule],
				declarations: [ButtonExampleComponent],
			},
			template: `
				<companypre-button-example [disabled]="disabled"></companypre-button-example>
			`,
			props: {
				disabled,
			},
		};
	});
