import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-input-name',
	templateUrl: './input-name.component.html',
	styleUrls: ['./input-name.component.css']
})
export class InputNameComponent implements OnInit {

	userName: string = "Dima";

	constructor() { }

	ngOnInit(): void {
	}

	onUserReset(e: any) {
		console.log(e);
		this.userName = "";
	}
}
