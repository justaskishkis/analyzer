// tslint:disable:no-implicit-dependencies
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { storiesOf } from '@storybook/angular';
import { CompanyPreButtonModule } from '../button/button.module';
import { FormExampleComponent } from './components/form-example/form-example.component';
import { CompanyPreFormModule } from './form.module';

storiesOf('UI|Form', module)
	.add('Example', () => {
		return {
			moduleMetadata: {
				declarations: [FormExampleComponent],
				imports: [
					StoreModule.forRoot({}),
					CompanyPreFormModule,
					ReactiveFormsModule,
					CompanyPreButtonModule
				],
			},
			template: `
				<companypre-form-example></companypre-form-example>
			`,
		};
	});
