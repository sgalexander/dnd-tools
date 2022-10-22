import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { OceanEncountersPageComponent } from './pages/ocean-encounters-page/ocean-encounters-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'ocean-encounters', component: OceanEncountersPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
