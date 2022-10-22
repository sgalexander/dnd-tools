import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ENCOUNTERS } from 'src/app/data/encounters';
import { Encounter, EncounterTypes } from 'src/app/models/encounter';

@Component({
  selector: 'dnd-ocean-encounters-page',
  templateUrl: './ocean-encounters-page.component.html',
  styleUrls: ['./ocean-encounters-page.component.scss']
})
export class OceanEncountersPageComponent implements OnInit {

  encounterForm: FormGroup = new FormGroup({
    numberOfEncounters: new FormControl(1),
    advantageType: new FormControl('no')
  });
  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  encounters: Encounter[] = [];

  constructor(
  ) { }

  ngOnInit(): void {

  }

  generateEncounters() {
    this.encounters = [];
    let formValues = this.encounterForm.value;
    for (let i = 0; i < formValues.numberOfEncounters; i++) {
      let tableRoll: number = this.getTableRoll(formValues.advantageType);
      let encounterType: EncounterTypes = this.tableType(tableRoll);
      let roll = this.rollDice(20);
      let encounter: Encounter = ENCOUNTERS[encounterType][roll - 1];
      encounter.roll = roll;
      encounter.encounter_type = encounterType;
      this.encounters.push(encounter);
    }
  }

  private getTableRoll(advantageType: string) {
    let tableRolls = [];
      // We add two rolls, in case of Advantage//Disadvantage
      tableRolls.push(this.rollDice(20));
      tableRolls.push(this.rollDice(20));
      switch(advantageType) {
        case 'adv':
          return tableRolls.reduce((a, b) => Math.max(a, b));
        case 'dis':
          return tableRolls.reduce((a, b) => Math.min(a, b));
        default:
          return tableRolls[0];
      }
  }

  private tableType(roll: number) {
    if (roll === 20) {
      return EncounterTypes.lucky;
    } else if (roll <= 3 ) {
      return EncounterTypes.high;
    } else if (roll <= 9 ) {
      return EncounterTypes.medium;
    } else {
      return EncounterTypes.low;
    }
  }

  rollDice(sides: number) {
    return Math.floor(Math.random() * sides) + 1;
  }

}
