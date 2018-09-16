import { Chef } from "./chef";
import { Développeur } from "./développeur";
import { assistantRh } from "./assistant-rh";
import { TennisPlus } from "./tennis-plus";
import { assistantTennis } from "./assistant-tennis";

let chef = new Chef();
let antoine = new Développeur("Antoine", chef);
let maxime = new Développeur("Maxime", chef);
let jérôme = new Développeur("Jérôme", chef);
let tennisPlus = new TennisPlus();
chef.assistants.push(assistantRh, assistantTennis);
chef.abonnésDocuments.push(maxime, jérôme);
chef.abonnésMessages.push(tennisPlus);
antoine.absent();
