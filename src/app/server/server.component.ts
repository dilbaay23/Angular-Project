
import { getLocaleDateFormat } from '@angular/common';
import{ Component } from '@angular/core'
import { NgForm } from '@angular/forms';

@Component({
 selector:'app-server',
templateUrl : './server.component.html'

})
export class ServerComponent{

    serverId: number =10;
    serverStatus:string = 'offline';

    constructor(){
      this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }
    
    getServerStatus(){
      return this.serverStatus;
    }
  
  getColor()
{
  return this.serverStatus === 'online' ? 'green' :'red';
}
}