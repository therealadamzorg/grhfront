import { Component } from '@angular/core';
export interface PieceJointe {
  document: String,
  obligatoire: String
}
@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.scss']
})

export class AjoutComponent {
  validateInput(value: number): boolean {
    const stringValue = String(value);
    return stringValue.length === 8 && /^\d+$/.test(stringValue);

  }
  pieces: PieceJointe[] = [
    {document: "cin", obligatoire: "oui"},
    {document: "diplome", obligatoire: "oui"},
    {document: "attestation", obligatoire: "oui"},
    {document: "taravil", obligatoire: "oui"},

  ];
  dropdownItems = [
    { label: 'Afghanistan', value: 'Afghanistan' },
    { label: 'Albania', value: 'Albania' },
    { label: 'Algeria', value: 'Algeria' },
    { label: 'Andorra', value: 'Andorra' },
    { label: 'Angola', value: 'Angola' },

  ];
  cin: number = 0;
  nss: number = 0;
  nc: number = 0;
  tel: number = 0;
  email: string = "";
  adresse: string = "";
  natureEt: string = "";
  niveauEt: string = "";
  exp: number = 0;
  certification: string = "";
  salaireDeBase: number = 0;
  dateDebCont: string = "";
  dateFinCont: string = "";
  departement: String = "";
  responsable: string = "";
  poste: string = "";
  recommendation: boolean = false;
  collaborateur: string = "";
  commentaire: string = "";




checked: boolean = true;
  selectedCountry: any; // You can set a default selected country here if needed
  selectedState: any;

}
