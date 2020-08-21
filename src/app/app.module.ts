import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { TryComponent } from "./Try/try.component";
import { WarningAlertComponent } from "./warning-alert/warning-alert.component";
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { LoadingComponent } from './loading/loading.component';
import { InputNameComponent } from "./input-name/input-name.component";


@NgModule({
	declarations: [
		AppComponent,
		ServerComponent,
		ServersComponent,
		TryComponent,
		ServersComponent,
		WarningAlertComponent,
		SuccessAlertComponent,
		LoadingComponent,
		InputNameComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
