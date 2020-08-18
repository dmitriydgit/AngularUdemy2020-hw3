import { Component, OnInit } from '@angular/core';

@Component({
	selector: '.app-loading',
	template: `
	<h2>Loading components:</h2>
	<app-success-alert></app-success-alert>
	<div app-warning-alert></div>
	`,
	styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

}
