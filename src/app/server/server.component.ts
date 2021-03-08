
import{ Component } from '@angular/core'
import { NgForm } from '@angular/forms';

@Component({
 selector:'app-server',
templateUrl : './server.component.html'

})
export class ServerComponent{

    serverId: number =10;
    serverStatus:string = 'offline';
    
    getServerStatus(){
      return this.serverStatus;
    }
  }
