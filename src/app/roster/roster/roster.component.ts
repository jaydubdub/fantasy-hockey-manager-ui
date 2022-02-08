import { Component, OnInit } from '@angular/core';
import { Observable, shareReplay, startWith } from 'rxjs';
import { RosterPlayer, RosterPlayerGp, RosterTypes } from '../models';
import { RosterService } from '../roster.service';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.scss']
})
export class RosterComponent implements OnInit {

  public farmRoster: Observable<RosterPlayerGp[]> = this.rosterService.getMaxGpByType(RosterTypes.FARM).pipe(
    shareReplay(1)
  );

  public prospectRoster: Observable<RosterPlayerGp[]> = this.rosterService.getMaxGpByType(RosterTypes.PROSPECT).pipe(
    shareReplay(1)
  );

  constructor(
    private rosterService: RosterService
  ) { }

  ngOnInit(): void {
    
  }

}
