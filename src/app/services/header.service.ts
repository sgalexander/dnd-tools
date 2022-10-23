import { EventEmitter, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {


  headerText$ = new EventEmitter<string>();

  constructor(
    private title: Title
  ) { }

  updateHeaderText(newText: string) {
    this.headerText$.emit(newText);
    this.title.setTitle(newText);
  }

}
