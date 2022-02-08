import { Component, OnInit } from '@angular/core';
import { Observable, startWith } from 'rxjs';
import { RosterPlayer, RosterTypes } from '../models';
import { RosterService } from '../roster.service';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.scss']
})
export class RosterComponent implements OnInit {

  public farmRoster: Observable<RosterPlayer[]> = this.rosterService.getRosterByType(RosterTypes.FARM).pipe(
    startWith([])
  );

  public prospectRoster: Observable<RosterPlayer[]> = this.rosterService.getRosterByType(RosterTypes.PROSPECT).pipe(
    startWith([])
  );

  constructor(
    private rosterService: RosterService
  ) { }

  ngOnInit(): void {
    
  }

}
