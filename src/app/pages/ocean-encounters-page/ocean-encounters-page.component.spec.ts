import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OceanEncountersPageComponent } from './ocean-encounters-page.component';

describe('OceanEncountersPageComponent', () => {
  let component: OceanEncountersPageComponent;
  let fixture: ComponentFixture<OceanEncountersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OceanEncountersPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OceanEncountersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
