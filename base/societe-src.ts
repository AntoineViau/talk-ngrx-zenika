// 1) On définit le store
interface Documents {
  absents: string[];
  disposTennis: string[];
}

interface Email {
  sujet: string;
  contenu: string;
}

interface Abonné {
  notification: (documents: Documents) => void;
}

// 2) On définit les développeurs
class Developpeur implements Abonné {
  constructor(public name: string) {}

  // 7) Un développeur peut être absent
  absent() {
    // 8) Il informe le chef
    let email = { sujet: "ABSENT", contenu: this.name };
    chef.receiveEmail(email);
  }

  notification(documents: Documents) {
    console.log(`${this.name} est notifié: ${JSON.stringify(documents)}`);
  }
}

// 3) On définit le chef
class Chef {
  // 4) En charge des documents
  documents: Documents = { absents: [], disposTennis: [] };
  // 5) Il a des assistants qui ont un boulot bien précis
  // à faire. Ce sont donc des fonctions.
  assistants: Function[] = [];
  abonnés: Abonné[] = [];

  // 9) Le chef est informé de diverses demandes
  receiveEmail(email: Email) {
    // 10) Il transfère l'information à ses assistants
    this.assistants.forEach(
      assistant => (this.documents = assistant(this.documents, email))
    );
    this.abonnés.forEach(abonné => abonné.notification(this.documents));
  }
}

// 11) On crée l'assistant RH
let AssistantRh = (
  documents = { absents: [], disposTennis: [] },
  email: Email
): Documents => {
  switch (email.sujet) {
    case "ABSENT":
      return {
        ...documents,
        absents: [...documents.absents, email.contenu]
      };
    default:
      return documents;
  }
};

// 6) On met en place
let chef = new Chef();
let antoine = new Developpeur("Antoine");
let maxime = new Developpeur("Maxime");
chef.assistants.push(AssistantRh);
chef.abonnés.push(maxime);
console.log(chef.documents);
antoine.absent();
console.log(chef.documents);
