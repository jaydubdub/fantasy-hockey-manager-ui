import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RosterComponent } from './roster/roster.component';
import { RosterRoutingModule } from './roster-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { RosterPlayerPanelComponent } from './roster-player-panel/roster-player-panel.component'


@NgModule({
  declarations: [
    RosterComponent,
    RosterPlayerPanelComponent
  ],
  imports: [
    CommonModule,
    RosterRoutingModule,
    MatTabsModule,
    MatExpansionModule
  ]
})
export class RosterModule { }
