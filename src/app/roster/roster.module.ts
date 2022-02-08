import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RosterComponent } from './roster/roster.component';
import { RosterRoutingModule } from './roster-routing.module';
import { MatTabsModule } from '@angular/material/tabs'


@NgModule({
  declarations: [
    RosterComponent
  ],
  imports: [
    CommonModule,
    RosterRoutingModule,
    MatTabsModule
  ]
})
export class RosterModule { }
