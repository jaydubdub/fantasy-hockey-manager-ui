import { Component, Input, OnInit } from '@angular/core';
import { RosterPlayerGp } from '../models';

@Component({
  selector: 'fhm-roster-player-panel',
  templateUrl: './roster-player-panel.component.html',
  styleUrls: ['./roster-player-panel.component.scss']
})
export class RosterPlayerPanelComponent implements OnInit {

  @Input('playerDetail') public playerDetail!: RosterPlayerGp;
  constructor() { }

  public ngOnInit(): void {
  }

}
