import { Documents } from "./documents";
import { AbonnéDocuments } from "./abonné-documents";
import { Message } from "./message";
import { AbonnéMessages } from "./abonné-messages";

export class Chef {
  documents: Documents = { absents: [], disposTennis: [] };
  abonnésDocuments: AbonnéDocuments[] = [];
  abonnésMessages: AbonnéMessages[] = [];
  assistants: Function[] = [];

  reçoitMessage(message: Message) {
    console.log(
      `Le chef reçoit un message: ${message.sujet}, ${message.contenu}`
    );
    this.assistants.forEach(
      assistant => (this.documents = assistant(this.documents, message))
    );

    this.abonnésDocuments.forEach(abonné =>
      abonné.notification(this.documents)
    );

    this.abonnésMessages.forEach(abonné => abonné.notification(this, message));
  }
}
