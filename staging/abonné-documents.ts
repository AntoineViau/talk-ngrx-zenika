import { Documents } from "./documents";

export interface AbonnéDocuments {
  notification: (documents: Documents) => void;
}
