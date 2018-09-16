import { Chef } from "./chef";
import { Message } from "./message";

export interface AbonnéMessages {
  notification: (client: Chef, message: Message) => void;
}
