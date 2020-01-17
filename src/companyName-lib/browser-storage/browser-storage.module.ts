import { NgModule } from '@angular/core';
import { BrowserStorageService } from './services/browser-storage.service';

const providers = [BrowserStorageService];

@NgModule({
	providers,
})
export class CompanyPreBrowserStorageModule {}
