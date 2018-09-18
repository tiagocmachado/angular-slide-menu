/*
 * *************************************************************************
 *
 * Copyright: Robert Bosch GmbH, 2018
 *
 * *************************************************************************
 */

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {
  select,
  Store
} from '@ngrx/store';

import {State} from '../../app.reducer';


@Injectable({
  providedIn: 'root',
})
export class PanelQueries {
  public sliceName = 'routerReducer';

  constructor(private _store: Store<State>) {
  }

  public observePanelState(): Observable<boolean> {
    return this._store
      .pipe(
        select((state: State) => state[this.sliceName].panelOpen)
      );
  }
}
