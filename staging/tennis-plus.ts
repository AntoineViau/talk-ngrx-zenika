import { AbonnéMessages } from "./abonné-messages";
import { Chef } from "./chef";
import { Message } from "./message";

export class TennisPlus implements AbonnéMessages {

  planning(): Promise<string> {
let promise = new Promise(function(resolve, reject) {
  setTimeout(function() { 
    resolve('foo');
  }, 300);
});  }

}
