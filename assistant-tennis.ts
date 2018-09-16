import { Documents } from "./documents";
import { Message } from "./message";

export let assistantTennis = (
  documents: Documents,
  message: Message
): Documents => {
  switch (message.sujet) {
    case "PLANNING":
      return {
        ...documents,
        disposTennis: [...documents.disposTennis, message.contenu]
      };
    default:
      return documents;
  }
};
