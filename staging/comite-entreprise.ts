import { AbonnéMessages } from "./abonné-messages";
import { Chef } from "./chef";
import { Message } from "./message";

export class ComiteEntreprise implements AbonnéMessages {
  notification(client: Chef, message: Message) {
    if (message.sujet === "ABSENT") {
      console.log(
        `Le CE reçoit une notification de message: ${message.sujet},${
          message.contenu
        }`
      );
      let nouveauPlanning = this.refaitLePlanning();
      let messagePlanning: Message = {
        sujet: "PLANNING",
        contenu: nouveauPlanning
      };
      client.reçoitMessage(messagePlanning);
    }
  }

  private refaitLePlanning() {
    return `Planning du ${new Date().toLocaleDateString()}`;
  }
}
