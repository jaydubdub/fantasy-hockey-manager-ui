import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RosterTypes } from './models/roster-types.enum';

import { environment as env } from 'src/environments/environment';
import { RosterPlayer } from './models';

@Injectable({
  providedIn: 'root'
})
export class RosterService {

  constructor(private http: HttpClient) { }

  public getRosterByType(rosterType: RosterTypes): Observable<RosterPlayer[]> {
    return this.http.get(`${env.apiConfig.basePath}/analysis/${rosterType}/max-games`) as Observable<RosterPlayer[]>;
  }
}
