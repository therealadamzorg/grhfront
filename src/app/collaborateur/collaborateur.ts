// collaborateur.model.ts

export interface Collaborateur {
  id: number;
  cin: number;
  nomComplet: string;
  numCompte: number;
  numSS: number;
  numTel: number;
  dateNaiss: string; // Assuming you are receiving this as a string from the server
  adresse: string;
  email: string;
  certification: string;
  anneeExp: number;
  dateDebutContrat: string; // Assuming you are receiving this as a string from the server
  dateFinContrat: string; // Assuming you are receiving this as a string from the server
  recommandation: number;
  collabRec: string;
  commentaire: string;
  salaireBrut: number;

}
