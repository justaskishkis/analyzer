import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ApiEndpointService } from './services/api-endpoints.service';
import { ApiUtilService } from './services/api-utils.service';
import { BaseApiService } from './services/base-api.service';

const imports = [CommonModule, HttpClientModule, HttpClientJsonpModule];

const providers = [BaseApiService, ApiUtilService, ApiEndpointService];

@NgModule({
	imports,
	providers,
})
export class ApiConsumeModule {}
