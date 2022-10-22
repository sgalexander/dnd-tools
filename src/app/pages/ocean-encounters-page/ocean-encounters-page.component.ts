import { Component, OnInit } from '@angular/core';
import { Encounter } from 'src/app/models/encounter';

@Component({
  selector: 'dnd-ocean-encounters-page',
  templateUrl: './ocean-encounters-page.component.html',
  styleUrls: ['./ocean-encounters-page.component.scss']
})
export class OceanEncountersPageComponent implements OnInit {

  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // TODO: Type Encounters.
  encounters: Encounter[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  generateEncounters() {
    this.encounters = [];
  }
}
