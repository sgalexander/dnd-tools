import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'dnd-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(
    private headerService: HeaderService
  ) { }

  ngOnInit(): void {
    this.headerService.updateHeaderText('Dungeons and Dragons Tools');
  }

}
