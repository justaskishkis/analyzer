// tslint:disable:no-implicit-dependencies
import { storiesOf } from '@storybook/angular';
import { CompanyPreListModule } from './list.module';
import { ListTextExampleComponent } from './components/list-text-example/list-text-example.component';
import { ListTagsExampleComponent } from './components/list-tags-example/list-tags-example.component';

storiesOf('UI|List', module)
	.add('Text', () => {
		return {
			moduleMetadata: {
				imports: [CompanyPreListModule],
				declarations: [ListTextExampleComponent],
			},
			template: `
				<companypre-list-text-example></companypre-list-text-example>
			`,
		};
	})
	.add('Tags', () => {
		return {
			moduleMetadata: {
				imports: [CompanyPreListModule],
				declarations: [ListTagsExampleComponent],
			},
			template: `
				<companypre-list-tags-example></companypre-list-tags-example>
			`,
		};
	});
