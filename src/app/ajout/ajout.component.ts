import { PieceJointeService } from './piecejointe.service';
import { ResponsableService } from './responsable.service';
import { TypeContrat } from './models';
import { Component, Inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  NgForm,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { UploadEvent } from 'primeng/fileupload';
import { TypeContratService } from './type-contrat.service';
import { HttpResponse } from '@angular/common/http';
import { DepartementService } from './departement.service';
import { PosteService } from './poste.service';
import { Departement, NatureEtude, Poste } from './models';
import { Responsable } from './models';
import { NatureEtudesService } from './natureetudes.service';
import { NiveauEtudesService } from './niveauetudes.service';
import { PieceJointe } from './models';
@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.scss'],
})
export class AjoutComponent implements OnInit {
  yourForm: FormGroup;
  typeContrats: TypeContrat[] = [];
  allContrats: TypeContrat[] = [];
  avantageSurSalaire: any[] = [];
  collaborateurService: any;
  http: any;
  departements: Departement[] = [];
  nomdepartements: any[] = [];
  nomposte: any[] = [];
  responsables: Responsable[] = [];
  nomResponsable: any[] = [];
  selectedResponsableName: string | null = null;
  natureEtudes: any[] = [];
  natureEtudeNames: any[] = [];
  pieces: PieceJointe[] = [];

  formsubmit: boolean = false;
  postes: Poste[] = [];
  selectedDepartement: Departement | null = null;
  selectedPosteName: string | null = null;
  niveauEtudes: any[] = [];
  selectedTypeContrat: any;


  constructor(
   @Inject(TypeContratService) private typeContratService: TypeContratService,
    @Inject(DepartementService) private departementService: DepartementService,
    @Inject(PosteService) private posteService: PosteService,
    @Inject(ResponsableService) private responsableService: ResponsableService,
    @Inject(NatureEtudesService) private natureEtudesService: NatureEtudesService,
    @Inject(NiveauEtudesService) private niveauEtudesService: NiveauEtudesService,
    private pieceJointeService: PieceJointeService,
    private fb: FormBuilder
  ) {
    this.yourForm = this.fb.group({
      nomComplet: [null, Validators.required],
      cin: [, [this.exactLengthValidator(8), Validators.required]],
      nss: [null, [this.exactLengthValidator(15), Validators.required]],
      numCompte: ['', [this.exactLengthValidator(13), Validators.required]],
      numTel: ['', [this.exactLengthValidator(8), Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/),
        ],
      ],
      adresse: ['', Validators.required],
      dateNaiss: ['', [Validators.required]],
      natureEt: ['', Validators.required],
      niveauEt: ['', Validators.required],
      exp: [null, Validators.required],
      certification: [null, Validators.required],
      typeContrat: [null, Validators.required],
      avantageSurSalaire: [null, Validators.required],
      salaireDeBase: [null, Validators.required],
      dateDebCont: [new Date, [Validators.required]],
      dateFinCont: [null, [Validators.required]],
      departement: [null, Validators.required],
      responsable: [null, Validators.required],
      poste: [null, Validators.required],
      piecesJointes: [null, Validators.required],
      recommendation: [false],
      collaborateur: ['', [Validators.required]],
      commentaire: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.getTypeContrats();
    this.departementService.getAllDepartements().subscribe(
      (data) => {
        this.departements = data;
        this.nomdepartements = data.map((t) => t.nomDepartement);
      },
      (error) => {
        console.error('Error fetching departements:', error);
      }
    );
    this.responsableService.getAllResponsables().subscribe((data) => {
      this.responsables = data;
      this.nomResponsable = data.map((t) => t.nomResponsable);
    });
    this.getNatureEtudes();
    this.getNiveauEtudes();

  }

  onTypeContratChange(event: any)  {
    console.log("event//////",event)
    console.log("this.typeContrats",this.typeContrats)

   const typecontrat = event.value;
   let id:number =this.allContrats.filter(e=>e.typeContrat===typecontrat)[0].id
   console.log('id', id);

    this.pieceJointeService.getPieceJointeForTypeContrat(id).subscribe((data: PieceJointe[]) => {
      this.pieces = data;
      console.log('pieces*************', this.pieces);

    })

    this.selectedTypeContrat = event.value;
    console.log('Selected typeContrat:', this.selectedTypeContrat);

    // If you want to update the form control value
    this.yourForm.get('typeContrat')?.setValue(this.selectedTypeContrat);
  }


  getNiveauEtudes(): void {
    this.niveauEtudesService.getNiveauEtudes()
      .subscribe(data => {
        this.niveauEtudes = data.map(t => t.niveauEtude);
      });

  }

  getNatureEtudes(): void {
    this.natureEtudesService.getNatureEtudes()
      .subscribe(data => {
        this.natureEtudes = data.map(t => t.natureEtude);

        console.log(this.natureEtudes); // Log the data to the console or do something else with it
      });
  }

  onResponsableChange(event: any) {
    const selectedResponsableValue = event.value;


    const selectedResponsableIndex = this.nomResponsable.findIndex(responsable => responsable === selectedResponsableValue);

    if (selectedResponsableIndex !== -1) {
      this.selectedResponsableName = this.nomResponsable[selectedResponsableIndex];
      console.log('Selected Responsable Name:', this.selectedResponsableName);
    } else {
      this.selectedResponsableName = null;
      console.error('Matching Responsable value not found.');
    }


  }

  onPosteChange(event: any) {
    const selectedPosteValue = event.value;
    const selectedPosteObject = this.postes.find(poste => poste.id === selectedPosteValue);
    if (selectedPosteObject) {
      this.selectedPosteName = selectedPosteObject.nomPoste;
      console.log('Selected Poste Name:', this.selectedPosteName);
    } else {
      this.selectedPosteName = null; // Reset if no matching object is found
      console.error('Matching Poste object not found.');
    }
  }



  onDepartementChange(event: any): void {
    const departement = event.value;
    let id = this.departements.filter(
      (e) => e.nomDepartement === departement
    )[0].id;

    console.log('id', id);

    this.posteService.getPostesForDepartement(id).subscribe((data: any[]) => {
      this.postes = data;
      console.log('this.postes', this.postes);
    });
  }

  getTypeContrats() {
    this.typeContratService.getTypeContrats().subscribe(
      (data) => {
        this.allContrats = data;
        this.typeContrats = data.map((t) => t.typeContrat);
        this.avantageSurSalaire = data.map((t) => t.avantageSurSalaire);
        console.log('data', data);
      },
      (error) => {
        console.error('Error fetching typeContrats', error);
      }
    );
  }

  getTyp(event: any) {
    let a = event.value;

    let typ = this.allContrats.filter((e) => e.typeContrat === a)[0];
    this.yourForm.controls['avantageSurSalaire'].setValue(
      typ.avantageSurSalaire
    );
    this.yourForm.controls['salaireDeBase'].setValue(typ.salaireDeBase);
  }

  onSubmit() {
    if (this.yourForm.valid) {
      const formData = this.yourForm.value;
      this.http.post('localhost:8088/collaborateurs', formData).subscribe(
        (response: any) => {
          console.log('Backend response:', response);
        },
        (error: any) => {
          console.error('Error submitting form:', error);
        }
      );
    }
  }

  exactLengthValidator(length: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (Validators.required(control) !== null) {
        return null;
      }

      const value = control.value;
      const isNumeric = !isNaN(parseFloat(value)) && isFinite(value);
      const hasExactLength = isNumeric && value.toString().length === length;

      return hasExactLength ? null : { exactLength: { valid: false } };
    };
  }



  save() {
    console.log('hjdhfbghfdg');
    this.formsubmit = true;
    this.onSubmit();
  }
}
