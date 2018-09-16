import { Chef } from "./chef";
import { Développeur } from "./développeur";
import { assistantRh } from "./assistant-rh";
import { ComiteEntreprise } from "./comite-entreprise";
import { assistantTennis } from "./assistant-tennis";

let chef = new Chef();
let antoine = new Développeur("Antoine", chef);
let maxime = new Développeur("Maxime", chef);
let jérôme = new Développeur("Jérôme", chef);
chef.assistants.push(assistantRh);
chef.abonnésDocuments.push(maxime, jérôme);

let ce = new ComiteEntreprise();
chef.abonnésMessages.push(ce);
chef.assistants.push(assistantTennis);

antoine.absent();
