import { AbonnéMessages } from "./abonné-messages";
import { Chef } from "./chef";
import { Message } from "./message";
import { TennisPlus } from "./tennis-plus";

export class ComiteEntreprise implements AbonnéMessages {
  notification(chef: Chef, message: Message) {
    if (message.sujet === "ABSENT") {
      console.log(
        `Le CE reçoit une notification de message: ${message.sujet},${
          message.contenu
        }`
      );
      console.log("Le CE demande le nouveau planning...");
      TennisPlus.planning().then(nouveauPlanning => {
        let messagePlanning: Message = {
          sujet: "PLANNING",
          contenu: nouveauPlanning
        };
        chef.reçoitMessage(messagePlanning);
      });
    }
  }
}
