import { Documents } from "./documents";
import { Message } from "./message";

export let assistantRh = (
  documents: Documents,
  message: Message
): Documents => {
  switch (message.sujet) {
    case "ABSENT":
      return {
        ...documents,
        absents: [...documents.absents, message.contenu]
      };
    default:
      return documents;
  }
};
