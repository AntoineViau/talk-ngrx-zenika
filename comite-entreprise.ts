import { AbonnéMessages } from "./abonné-messages";
import { Chef } from "./chef";
import { Message } from "./message";
import { TennisPlus } from "./tennis-plus";
export class ComiteEntreprise implements AbonnéMessages {
  notification(client: Chef, message: Message) {
    if (message.sujet === "ABSENT") {
      console.log(
        `Le CE reçoit une notification de message: ${message.sujet},${
          message.contenu
        }`
      );
      console.log("Demande du nouveau planning à TennisPlus...");
      TennisPlus.planning().then(nouveauPlanning => {
        let messagePlanning: Message = {
          sujet: "PLANNING",
          contenu: nouveauPlanning
        };
        client.reçoitMessage(messagePlanning);
      });
    }
  }
}
