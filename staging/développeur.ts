import { AbonnéDocuments } from "./abonné-documents";
import { Documents } from "./documents";
import { Chef } from "./chef";
import { Message } from "./message";

export class Développeur implements AbonnéDocuments {
  constructor(private name: string, private chef: Chef) {}

  absent() {
    let message: Message = { sujet: "ABSENT", contenu: this.name };
    this.chef.reçoitMessage(message);
  }

  notification(documents: Documents) {
    console.log(`${this.name} reçoit documents: ${JSON.stringify(documents)}`);
  }
}
