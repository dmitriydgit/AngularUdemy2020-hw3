import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-hw3',
	templateUrl: './hw3.component.html',
	styleUrls: ['./hw3.component.css']
})
export class Hw3Component implements OnInit {

	showParagraph = true;
	clicksStorage = [];

	constructor() { }

	ngOnInit(): void {
	}

	onTogleDisplaying() {
		let currentdate = new Date();
		let datetime = "Click: " + currentdate.getDate() + "/"
			+ (currentdate.getMonth() + 1) + "/"
			+ currentdate.getFullYear() + " @ "
			+ currentdate.getHours() + ":"
			+ currentdate.getMinutes() + ":"
			+ currentdate.getSeconds();

		this.showParagraph = !this.showParagraph;
		this.clicksStorage.push(datetime);
		console.log(this.clicksStorage);

	}
	getColor(indexOfelement) {
		if (indexOfelement >= 5) {
			return "blue";
		}
	}
}
