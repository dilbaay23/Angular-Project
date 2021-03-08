import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
 // template: `
  //<app-server></app-server>
 // <app-server></app-server>`,
 templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  myUrl ="https://www.google.com";

  constructor() {
    setTimeout(() => {
      this.allowNewServer =true;
    }, 2000);
    setTimeout(() => {
      this.myUrl ="https://www.gmail.com";
    }, 3000);

   }
   

  ngOnInit(): void {
  }

}
