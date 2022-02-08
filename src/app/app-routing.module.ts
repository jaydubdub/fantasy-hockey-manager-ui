import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RosterModule } from './roster/roster.module';

const routes: Routes = [
  {
    path: 'roster',
    loadChildren: () => RosterModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
