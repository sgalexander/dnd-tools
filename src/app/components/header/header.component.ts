import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dnd-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() pageName: string = "default header";

  constructor() { }

  ngOnInit(): void {
  }

}
