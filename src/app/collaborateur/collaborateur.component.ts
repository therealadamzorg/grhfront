import { Component, OnInit } from '@angular/core';
import { CollaborateurService } from './collaborateur.service';


@Component({
  selector: 'CollaborateurComponent',
  templateUrl: 'collaborateur.component.html',
  styleUrls: ['collaborateur.component.css'],
})
export class CollaborateurComponent implements OnInit {
  collaborateurs: any[] = [];
  totalSalaireBrut: number = 0;
  constructor(private collaborateurService: CollaborateurService) {}

  ngOnInit(): void {
    this.fetchCollaborateurs();
  }

  fetchCollaborateurs(): void {
    this.collaborateurService.getCollaborateurs().subscribe(
      (data) => {
        this.collaborateurs = data;
        this.totalSalaireBrut = this.collaborateurService.calculateTotalSalaireBrut(this.collaborateurs);
      },
      (error) => {
        console.error('Error fetching collaborateurs:', error);
      }
    );
  }
}
