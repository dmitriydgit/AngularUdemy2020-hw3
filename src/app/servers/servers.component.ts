import { Component, OnInit } from '@angular/core';

@Component({
	selector: "app-servers",
	// selector: '[app-servers]',
	// selector: ".app-servers",
	templateUrl: "./servers.component.html",
	// template: `
	// <p>Servers works</p>
	// <app-server></app-server>
	// <app-server></app-server>`,
	styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
	allowNewServer = false;
	serverCreationStatus = "No server was created";
	serverName = "TestServer";

	constructor() {
		setTimeout(() => {
			this.allowNewServer = true;
		}, 2000)
	}

	ngOnInit(): void {
		// console.dir(document.getElementById("mybtn"))
	}

	onCreateServer(e) {
		this.serverCreationStatus = "Server created! Name is " + this.serverName;
		console.log(e);
	}

	onUpdateServerName(e: any) {
		console.log(e.target.value);
		this.serverName = e.target.value;
	}

}
