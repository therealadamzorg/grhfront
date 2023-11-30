
export interface Poste {
  id: number;
  nomPoste: string;
  departement: Departement;
}

export interface Departement {
  [x: string]: any;
  id: number;
  nomDepartement: string;
}

export interface Responsable {
  id: number;
  nomResponsable: string;
}


export interface NatureEtude {
  id: number;
  natureEtude: string;
}

export interface TypeContrat {
  id: number;
  typeContrat: string;
  avantageSurSalaire: string;
  salaireDeBase: number;

}

export interface PieceJointe {
  id: number;
  pieceJointe: string;
}
