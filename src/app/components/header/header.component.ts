import { Component, EventEmitter, Input, OnDestroy, OnInit } from '@angular/core';
import { pipe, Subject, takeUntil } from 'rxjs';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'dnd-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  pageName = 'Dungeons and Dragons Tools';
  unsubscribe$ = new Subject();
  constructor(
    private headerService: HeaderService
  ) { }

  ngOnInit(): void {
    this.headerService.headerText$.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe((headerText) => {
      this.pageName = headerText;
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next(null);
    this.unsubscribe$.complete();
  }

}
