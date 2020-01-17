// tslint:disable:no-implicit-dependencies
import { storiesOf } from '@storybook/angular';
import { CompanyPreLoadingModule } from './loading.module';
import { LoadingGlobalExampleComponent } from './components/global-example/loading-global-example.component';

storiesOf('UI|Loading', module)
	.add('Global', () => {
		return {
			moduleMetadata: {
				imports: [CompanyPreLoadingModule],
				declarations: [LoadingGlobalExampleComponent],
			},
			template: `
				<companypre-loading-global-example></companypre-loading-global-example>
      		`,
		};
	});
