// tslint:disable:no-implicit-dependencies
import { storiesOf } from '@storybook/angular';
import { CompanyPreCardModule } from './card.module';
import { CardExampleComponent } from './components/card-example/card-example.component';

storiesOf('UI|Card', module)
	.add('Basic', () => {
		return {
			moduleMetadata: {
				imports: [CompanyPreCardModule],
				declarations: [CardExampleComponent],
			},
			template: `
				<companypre-card-example></companypre-card-example>
			`,
		};
	});
